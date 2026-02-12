"use client";

import Link from "next/link";
import { useAuth } from "@/firebase/authProvider";
import { focusEffects, transitions } from "@/components/styles/transitions";
import DashboardArrow from "./components/DashboardArrow";

export default function AccountPage() {
  const { profile, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  const displayName = profile?.displayName ?? "User";
  const email = profile?.email ?? "";
  const cartCount = profile?.jadeLilyCart?.length ?? 0;
  const ordersCount = profile?.jadeLilyTotalOrders ?? 0;

  const cardBase = `
    group relative flex flex-col justify-between gap-3 p-5 xl:py-8 xl:px-10 rounded-lg
    grad-primary text-orange-800 shadow-md
    ${transitions} ${focusEffects}
    hover:scale-[1.03] hover:shadow-2xl active:scale-95
  `;

  return (
    <main className="w-full max-w-5xl xl:max-w-6xl px-2 md:px-6 lg:px-10 xl:px-16 pb-10 md:pt-10 ">
      <h2 className="sr-only">Account dashboard</h2>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        {/* Account profile card */}
        <Link
          href="/account/settings"
          className={cardBase}
          aria-label={`Open account settings for ${displayName}`}
        >
          <div>
            <p className="text-lg font-semibold">
              Welcome back{" "}
              <span className="font-dancing text-xl text-orange-800">{displayName}</span>!
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Manage your profile & preferences
            </p>

            {email && <p className="mt-3 text-xs text-stone-500">Signed in as <span className="font-mono">{email}</span></p>}
          </div>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-800">
              Account settings
            </span>
            <DashboardArrow />
          </div>
        </Link>

        {/* Order online / menu */}
        <Link
          href="/account/menu"
          className={cardBase}
          aria-label="Open your menu to order online"
        >
          <div>
            <p className="text-lg font-semibold">Order online</p>
            <p className="mt-1 text-sm text-stone-600">Browse the menu and place an order</p>
            <ul className="mt-3 text-sm text-stone-600 space-y-1">
              <li>{cartCount > 0 ? `You have ${cartCount} item${cartCount > 1 ? "s" : ""} in your cart` : "No items in cart"}</li>
              <li>{ordersCount > 0 ? `You have ${ordersCount} past order${ordersCount > 1 ? "s" : ""}` : "No past orders"}</li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-orange-800">Open menu</span>
            <DashboardArrow />
          </div>
        </Link>

        {/* Cart */}
        <Link
          href="/account/cart"
          className={cardBase}
          aria-label={`Open cart with ${cartCount} items`}
        >
          <div>
            <p className="text-lg font-semibold">Your cart</p>
            <p className="mt-1 text-sm text-stone-600">
              {cartCount > 0 ? `${cartCount} item${cartCount > 1 ? "s" : ""} waiting for checkout` : "Your cart is empty"}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-orange-800">View cart</span>
            <DashboardArrow />
          </div>
        </Link>

        {/* Reservations */}
        <Link
          href="/account/reservations"
          className={cardBase}
          aria-label="View or create reservations"
        >
          <div>
            <p className="text-lg font-semibold">Reservations</p>
            <p className="mt-1 text-sm text-stone-600">Reserve a table</p>
            <p className="mt-3 text-xs text-stone-500">
              Manage upcoming reservations and booking details
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-orange-800">Manage</span>
            <DashboardArrow />
          </div>
        </Link>
      </div>
    </main>
  );
}
