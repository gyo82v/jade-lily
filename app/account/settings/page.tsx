"use client"

import { useAuth } from "@/firebase/authProvider"

export default function SettingsPage() {
    const { user, profile, loading } = useAuth();
    let memberSince = "";
    console.log("user profile:", profile);

    if (loading) {
        return <div>Loading...</div>;
    }

    if(profile?.createdAt){
        const date = profile.createdAt.toDate();
        const datetime = date.toISOString();
        console.log("ISO date:", datetime);
        memberSince = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
    }

    const containerStyle = `flex flex-col h-full p-4 w-full 
                            bg-gradient-to-br from-orange-100 to-orange-50 
                            rounded-lg shadow-md mx-6 my-8
                            `;

    return (
    <section className={containerStyle}>
        <h1>{profile?.displayName || "User"}&apos;s Settings</h1>
        <p>Email: {user?.email}</p>
        <p>Member since: {memberSince || "Unknown"}</p>
        <p>Orders amount: {profile?.jadeLilyTotalOrders || 0}</p>
        <p>Credit spent: {profile?.jadeLilyCreditUsed || 0}</p>
        <p>Current credit: {profile?.jadeLilyCredit || 0}</p>
    </section>
)
}