import {doc, updateDoc, increment, runTransaction, serverTimestamp} from "firebase/firestore"
import { db } from "./firebase";
import { nanoid } from "nanoid"; 
import type { DishForCart, CartItem } from "@/types";

export type PastOrder = {
  id: string;
  price: number;
  date: any;        // serverTimestamp() value (Firestore Timestamp)
  dateLabel?: string; // human-friendly string (client-side formatted)
  items?: CartItem[];  // snapshot of items that composed the order
};

export async function addUserCredit(userId:string, amount:number){
    if(amount <= 0) throw new Error("Amount must be positive");
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {jadeLilyCredit: increment(amount)});
}

export async function addToJadeLilyCart(
  userId: string,
  dish: DishForCart,
  amount?: number
): Promise<CartItem[]> {
  if (!userId) throw new Error("userId required");
  if (!dish || !dish.dishId) throw new Error("dish with dishId required");

  const qtyToAdd = Number.isFinite(amount) && amount! > 0 ? Math.floor(amount!) : 1;
  const userRef = doc(db, "users", userId);

  const finalCart = await runTransaction(db, async (transaction) => {
    const userSnap = await transaction.get(userRef);
    if (!userSnap.exists()) {
      throw new Error(`User document not found for uid=${userId}. Expected document to exist on protected page.`);
    }

    const data = userSnap.data();
    const cart: CartItem[] = Array.isArray(data?.jadeLilyCart) ? data.jadeLilyCart.slice() : [];

    // Try to find existing item by dishId
    const idx = cart.findIndex((ci) => ci?.dishId === dish.dishId);

    if (idx >= 0) {
      // Update existing item's qty
      const existing = { ...cart[idx] } as CartItem;
      const existingQty = (typeof existing.qty === "number" && existing.qty > 0) ? existing.qty : 0;
      existing.qty = existingQty + qtyToAdd;
      cart[idx] = existing;
    } else {
      // Create new cart item using nanoid
      const newItem: CartItem = {
        cartItemId: nanoid(),
        dishId: dish.dishId,
        name: dish.name,
        price: dish.price,
        qty: qtyToAdd
      };
      cart.push(newItem);
    }

    transaction.update(userRef, { jadeLilyCart: cart });
    return cart;
  });

  return finalCart;
}

export async function removeFromJadeLilyCart(userId: string, cartItemId: string): Promise<CartItem[]> {
  if (!userId) throw new Error("userId required");
  if (!cartItemId) throw new Error("cartItemId required");

  const userRef = doc(db, "users", userId);

  const finalCart = await runTransaction(db, async (transaction) => {
    const userSnap = await transaction.get(userRef);
    if (!userSnap.exists()) throw new Error(`User document not found for uid=${userId}.`);

    const data = userSnap.data()
    const cart: CartItem[] = Array.isArray(data?.jadeLilyCart) ? data.jadeLilyCart.slice() : [];

    const newCart = cart.filter((ci) => ci?.cartItemId !== cartItemId);

    transaction.update(userRef, { jadeLilyCart: newCart });
    return newCart;
  });

  return finalCart;
}


export async function placeOrder(userId: string): Promise<PastOrder> {
  if (!userId) throw new Error("userId required");

  const userRef = doc(db, "users", userId);

  const createdOrder = await runTransaction(db, async (transaction) => {
    const userSnap = await transaction.get(userRef);

    if (!userSnap.exists()) {
      throw new Error(`User document not found for uid=${userId}.`);
    }

    const data = userSnap.data() as any;

    const cart: CartItem[] = Array.isArray(data?.jadeLilyCart) ? data.jadeLilyCart.slice() : [];
    if (!cart.length) {
      throw new Error("Cart is empty.");
    }

    // Compute total price from cart (price * qty)
    const total = cart.reduce((sum, it) => {
      const price = Number(it?.price ?? 0);
      const qty = Number(it?.qty ?? 0);
      return sum + price * qty;
    }, 0);

    if (total <= 0) {
      throw new Error("Computed order total is zero or invalid.");
    }

    const currentCredit = Number(data?.jadeLilyCredit ?? 0);

    // Check user has enough credit
    if (currentCredit < total) {
      throw new Error("Insufficient jadeLilyCredit to complete the order.");
    }

    // Prepare order object
    const orderId = nanoid();
    const serverTime = serverTimestamp(); // Firestore server timestamp
    const dateLabel = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/Rome",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const orderObj: PastOrder = {
      id: orderId,
      price: total,
      date: serverTime,
      dateLabel,
      items: cart, // snapshot for future reference (optional but useful)
    };

    // Prepare updated past orders array
    const pastOrders: PastOrder[] = Array.isArray(data?.jadeLilyPastOrder)
      ? data.jadeLilyPastOrder.slice()
      : [];
    pastOrders.push(orderObj);

    // Prepare new summary counters (safe because we're inside transaction and read the values)
    const newCredit = currentCredit - total;
    const newCreditUsed = Number(data?.jadeLilyCreditUsed ?? 0) + total;
    const newTotalOrders = Number(data?.jadeLilyTotalOrders ?? 0) + 1;

    // Apply writes atomically
    transaction.update(userRef, {
      jadeLilyCart: [],                  // clear cart
      jadeLilyPastOrder: pastOrders,     // append order snapshot
      jadeLilyCredit: newCredit,         // deduct credit
      jadeLilyCreditUsed: newCreditUsed, // cumulative credit used
      jadeLilyTotalOrders: newTotalOrders, // increment orders counter
    });

    // Return order object (note: `date` is serverTimestamp placeholder; Firestore will fill it)
    return orderObj;
  });

  return createdOrder;
}