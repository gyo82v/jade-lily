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

    const containerStyle = `flex flex-col px-4 py-10 w-11/12 
                            bg-gradient-to-br from-orange-100 to-orange-50 
                            rounded-lg shadow-md mx-6 my-8
                            `;

    return (
    <section className={containerStyle}>
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