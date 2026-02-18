// components/AccountCartPage.tsx
"use client";

import Link from "next/link";
import { useAuth } from "@/firebase/authProvider";
import { Button } from "@/components";
import RemoveFromCartBtn from "./RemoveFromCartBtn";
import { FaShoppingCart, FaReceipt, FaUtensils } from "react-icons/fa";
import { useState, useMemo } from "react";
import ConfirmOrderModal from "@/components/ui/ConfirmOrderModal";
import type { CartItem } from "@/types";
import {useRouter} from "next/navigation"

export default function AccountCartPage() {
  const { profile, user, placeOrderForUser } = useAuth();
  const [isPlacing, setIsPlacing] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const router = useRouter()

  const cart: CartItem[] = useMemo(() => {
    return (profile?.jadeLilyCart ?? []).map((it: CartItem) => ({
      cartItemId: it.cartItemId,
      dishId: it.dishId,
      name: it.name,
      price: Number(it.price ?? 0),
      qty: Number(it.qty ?? 1),
    }));
  }, [profile?.jadeLilyCart]);

  const subtotal = useMemo(() => cart.reduce((sum, it) => sum + it.price * it.qty, 0), [cart]);
  const TAX_RATE = 0;
  const tax = +(subtotal * TAX_RATE).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  if (!user) return <p>Loading…</p>;

  async function handleConfirmOrder() {
    if (isPlacing) return;
    setIsPlacing(true);
    try {
      await placeOrderForUser(user.uid);
      // assume the server clears the cart on success and profile updates
      setConfirmOpen(false);
      router.push("/account/orders?processing=1");
    } catch (err) {
      console.error("Place order failed", err);
      // keep modal open so user can retry or cancel
    } finally {
      setIsPlacing(false);
    }
  }

  return (
    <div className="w-full flex flex-col gap-1 lg:gap-3 xl:gap-4">
      <div className="mb-6 flex items-center gap-3">
        <FaShoppingCart className="h-6 w-6 text-orange-800" aria-hidden="true" />
        <h2 className="text-lg font-semibold">Your cart</h2>
        <span className="ml-auto text-sm text-stone-600">
          {cart.length} item{cart.length !== 1 ? "s" : ""}
        </span>
      </div>

      <ConfirmOrderModal
        open={confirmOpen}
        title="Confirm your order"
        isLoading={isPlacing}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmOrder}
        confirmLabel="Place order"
        cancelLabel="Cancel"
      >
        {/* order summary */}
        <div className="space-y-3">
          <p className="text-sm text-stone-600">You&apos;re about to place an order with {cart.length} item{cart.length !== 1 ? "s" : ""}.</p>

          <ul className="max-h-40 overflow-auto divide-y divide-stone-100">
            {cart.map((it) => (
              <li key={it.cartItemId} className="py-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-orange-50 overflow-hidden flex items-center justify-center">
                  <FaUtensils className="h-4 w-4 text-orange-800" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{it.name}</div>
                  <div className="text-xs text-stone-500">Qty: {it.qty}</div>
                </div>
                <div className="text-sm font-medium">£{(it.price * it.qty).toFixed(2)}</div>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-stone-100">
            <div className="flex justify-between text-sm text-stone-700">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-stone-700">
              <span>Tax</span>
              <span>£{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-orange-800 mt-2">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </ConfirmOrderModal>

      {cart.length === 0 ? (
        <section aria-live="polite" className="rounded-lg p-6 bg-gradient-to-br from-orange-100 to-orange-50 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3">
              <FaReceipt className="h-8 w-8 text-orange-700" aria-hidden="true" />
              <div>
                <p className="font-semibold text-lg">Your cart is empty</p>
                <p className="text-sm text-stone-600">Browse the menu and add something tasty.</p>
              </div>
            </div>

            <div className="ml-auto flex gap-3">
              <Link href="/menu" className="inline-block">
                <Button className="px-4 py-2">Browse menu</Button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <>
          <ul className="space-y-4 mb-6 list-none" aria-live="polite">
            {cart.map((item) => (
              <li key={item.cartItemId ?? `${item.dishId}-${item.name}`} className="rounded-lg bg-white shadow-sm">
                <article
                  className="flex gap-3 p-4 md:p-5 items-center"
                  aria-label={`${item.name} — ${item.qty} × £${item.price.toFixed(2)}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-md bg-orange-50 flex items-center justify-center text-orange-800 font-medium overflow-hidden">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <FaUtensils className="h-5 w-5" aria-hidden="true" />
                      </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-dancing text-base md:text-lg font-semibold truncate">{item.name}</h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-stone-600">
                      <div>Qty: <span className="font-medium ml-1">{item.qty}</span></div>
                      <div>Unit: £{item.price.toFixed(2)}</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="text-lg font-semibold">£{(item.price * item.qty).toFixed(2)}</div>

                    <div className="flex items-center gap-2">
                      <RemoveFromCartBtn userId={user.uid} cartItemId={item.cartItemId} />
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="rounded-lg p-4 md:p-6 grad-primary shadow-md flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <dl className="text-sm text-stone-700">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>£{subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Tax</dt>
                  <dd>£{tax.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between font-semibold text-orange-800 mt-2">
                  <dt>Total</dt>
                  <dd>£{total.toFixed(2)}</dd>
                </div>
              </dl>
            </div>

            <div className="md:w-64">
              <Button
                onClick={() => setConfirmOpen(true)}
                isLoading={isPlacing}
                disabled={cart.length === 0 || isPlacing}
                className="w-full inline-flex items-center justify-center gap-2"
                aria-label="Place order"
              >
                <FaReceipt className="h-4 w-4" aria-hidden="true" />
                Place order
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

