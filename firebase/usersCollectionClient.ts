import {doc, updateDoc, increment, runTransaction} from "firebase/firestore"
import { db } from "./firebase";
import { nanoid } from "nanoid"; 

type DishForCart = {
  dishId: string;
  name: string;
  price: number;
};

export type CartItem = {
  cartItemId: string;
  dishId: string;
  name: string;
  price: number;
  qty: number;
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

/**
 * Remove a specific cart item by cartItemId (keeps transaction safety).
 *
 * @param userId - user's uid
 * @param cartItemId - the cartItemId to remove
 * @returns the new jadeLilyCart array after deletion
 */
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
