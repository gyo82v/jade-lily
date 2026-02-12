"use client";

import { useAuth } from "@/firebase/authProvider";
import Link from "next/link";
import { primaryButtonStyles } from "@/components/styles";
import { formatDate } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { HiOutlineCalendar, HiOutlineCreditCard } from "react-icons/hi2";

export default function SettingsPage() {
  const { user, profile, loading } = useAuth();
  const searchParams = useSearchParams();

  // flags driven by query params (existing behavior)
  const creditAdded = searchParams.get("credit-added") === "1";
  const tableReserved = searchParams.get("reserved") === "1";
  const reservationDate = searchParams.get("date");
  const reservationTime = searchParams.get("time");

  // local state so we can focus the message for screen readers
  const [showCreditMessage, setShowCreditMessage] = useState(Boolean(creditAdded));
  const [showReservationMessage, setShowReservationMessage] = useState(Boolean(tableReserved && reservationDate && reservationTime));

  // aria-live refs so we can focus a dismissible region if needed
  const creditMsgRef = useRef<HTMLParagraphElement | null>(null);
  const reservationMsgRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    setShowCreditMessage(Boolean(creditAdded));
    setShowReservationMessage(Boolean(tableReserved && reservationDate && reservationTime));
  }, [creditAdded, tableReserved, reservationDate, reservationTime]);

  useEffect(() => {
    // move focus to the success message when it appears (accessibility)
    if (showCreditMessage && creditMsgRef.current) {
      creditMsgRef.current.focus();
    }
    if (showReservationMessage && reservationMsgRef.current) {
      reservationMsgRef.current.focus();
    }
  }, [showCreditMessage, showReservationMessage]);

  if (loading) return <div>Loading...</div>;

  // derive friendly strings (safe access)
  const displayName = profile?.displayName ?? "User";
  let memberSince = "";
  try {
    if (profile?.createdAt?.toDate) {
      memberSince = formatDate(profile.createdAt.toDate());
    } else if (profile?.createdAt) {
      // fallback if it's already a Date string
      memberSince = formatDate(new Date(profile.createdAt));
    }
  } catch {
    memberSince = "";
  }

  // counts (safe)
  const cartCount = profile?.jadeLilyCart?.length ?? 0;
  const ordersCount = profile?.orders?.length ?? 0;

  // destructive button style (keeps gradient idea but communicates danger)
  const deleteButtonStyle = `
    bg-gradient-to-br from-red-300 via-red-200 to-red-300
    text-white py-2 px-4 rounded-lg font-semibold w-full text-center shadow
    hover:brightness-95 active:brightness-90
    transition-transform duration-200 ease-in-out active:scale-95
    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 focus-visible:ring-offset-2
  `;

  const secondaryLinkStyle = `
    inline-block text-sm text-orange-800 underline underline-offset-2
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2
  `;

  return (
    <main className="w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-dancing font-bold text-orange-800 mb-4">
        Account settings
      </h1>

      {/* Success messages (aria-live) */}
      <div className="space-y-3 mb-4">
        {showCreditMessage && (
          <p
            ref={creditMsgRef}
            tabIndex={-1}
            role="status"
            aria-live="polite"
            className="rounded-md bg-green-50 text-green-700 px-4 py-2 text-sm font-medium"
          >
            Credit added successfully!
          </p>
        )}

        {showReservationMessage && reservationDate && reservationTime && (
          <p
            ref={reservationMsgRef}
            tabIndex={-1}
            role="status"
            aria-live="polite"
            className="rounded-md bg-green-50 text-green-700 px-4 py-2 text-sm font-medium"
          >
            Table reserved for {formatDate(new Date(reservationDate))} at {reservationTime} (demo).
          </p>
        )}
      </div>

      {/* Card */}
      <section
        className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg shadow-md p-5 md:p-6 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start"
        aria-labelledby="settings-heading"
      >
        {/* avatar / mini-profile */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-36 h-36 rounded-full bg-white/80 border border-orange-100 flex items-center justify-center text-orange-800 text-2xl font-bold shadow"
            aria-hidden="true"
          >
            {/* simple initial as avatar placeholder */}
            {displayName.slice(0, 1).toUpperCase()}
          </div>

          <div className="text-center">
            <p className="font-semibold">{displayName}</p>
            {profile?.email && (
              <p className="text-sm text-stone-600 flex items-center gap-2 justify-center">
                <HiOutlineCalendar className="h-4 w-4" aria-hidden="true" />
                <span>{profile.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* main details */}
        <div>
          <div id="settings-heading" className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Personal info</h2>
            <Link href="/account/settings/edit" className={secondaryLinkStyle} aria-label="Edit profile">
              Edit
            </Link>
          </div>

          {/* details list (semantic) */}
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 mb-6">
            <div>
              <dt className="text-xs text-stone-500">Member since</dt>
              <dd className="font-medium">{memberSince || "Unknown"}</dd>
            </div>

            <div>
              <dt className="text-xs text-stone-500">Orders</dt>
              <dd className="font-medium">{ordersCount}</dd>
            </div>

            <div>
              <dt className="text-xs text-stone-500">Current credit</dt>
              <dd className="font-medium">{profile?.jadeLilyCredit ?? 0} <span className="text-sm text-stone-500">£</span></dd>
            </div>

            <div>
              <dt className="text-xs text-stone-500">Cart</dt>
              <dd className="font-medium">{cartCount} item{cartCount !== 1 ? "s" : ""}</dd>
            </div>
          </dl>

          {/* Short helper / privacy */}
          <div className="text-sm text-stone-600 mb-4">
            <p>
              Email: <span className="font-mono">{profile?.email ?? "—"}</span>
            </p>
            <p className="mt-2">We store only the information needed to provide this demo experience. No payment is processed.</p>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/account/add-credit" className={primaryButtonStyles} aria-label="Add credit to account">
              <span className="inline-flex items-center gap-2 justify-center">
                <HiOutlineCreditCard className="h-5 w-5" aria-hidden="true" />
                Add credit
              </span>
            </Link>

            {/* Delete account - destructive */}
            <Link href="/account/delete-account" className={deleteButtonStyle} aria-label="Delete account">
              Delete account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


/*
"use client"

import { useAuth } from "@/firebase/authProvider"
import Link from "next/link";
import { primaryButtonStyles } from "@/components/styles";
import { formatDate } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function SettingsPage() {
    const { user, profile, loading } = useAuth();
    const searchParams = useSearchParams();
    const creditAdded = searchParams.get("credit-added") === "1";
    const tableReserved = searchParams.get("reserved") === "1"
    const reservationDate = searchParams.get("date")
    const reservationTime = searchParams.get("time")
    let memberSince = "";
    console.log("user profile:", profile);

    if(loading) return <div>Loading...</div>;

    if(profile?.createdAt) memberSince = formatDate(profile.createdAt.toDate())

    return (
    <section className={`flex flex-col px-4 py-10 w-11/12 grad-primary
                         rounded-lg shadow-md mx-6 my-8`}>
        <h1 className="text-xl font-bold text-center">
            <span className="font-dancing text-2xl">{profile?.displayName || "User"}</span>&apos;s Settings
        </h1>
        {creditAdded && (
            <p className="text-green-600 font-semibold text-center mt-2">
                Credit added successfully!
            </p>
        )}
        {tableReserved && reservationDate && reservationTime && (
            <p className="text-green-600 font-semibold text-center mt-2">
                Table successfully reserved: {formatDate(new Date(reservationDate))} / {reservationTime}
            </p>
        )}
        <div className="flex flex-col gap-2 my-10 text-lg">
            <p><span className="font-bold mr-1">Email:</span> {user?.email}</p>
            <p><span className="font-bold mr-1">Member since:</span> {memberSince || "Unknown"}</p>
            <p><span className="font-bold mr-1">Orders amount:</span> {profile?.jadeLilyTotalOrders || 0}</p>
            <p><span className="font-bold mr-1">Credit spent:</span> {profile?.jadeLilyCreditUsed || 0}</p>
            <p><span className="font-bold mr-1">Current credit:</span> {profile?.jadeLilyCredit || 0}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Link href="/account/add-credit" className={primaryButtonStyles}>Add credit</Link>
            <Link href="/account/delete-account" className={primaryButtonStyles}>delete account</Link>
        </div>
    </section>
)
}
*/