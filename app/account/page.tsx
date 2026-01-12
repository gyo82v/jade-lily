"use client"

import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { useAuth } from "@/firebase/authProvider";

export default function AccountPage(){
    const {user, profile, loading} = useAuth();
    console.log("user profile:", profile);
    console.log("user auth:", user);
    console.log("loading auth state:", loading);

    const sectionStyle = `flex justify-between py-14 px-2 bg-gradient-to-br font-semibold text-lg
                          from-orange-100 to-orange-50 rounded-lg shadow-md`
    const linkStyle = `flex items-center gap-2 `
    return(
        <section className="flex flex-col h-full justify-evenly gap-4 p-4 w-full mt-6">
            <div className={sectionStyle}>
                <div>
                    <p className="font-bold text-xl">Welcome back <span className="font-dancing text-2xl ml-1">{profile?.displayName || "User"}</span>!</p>
                    <p className="font-light">Manage your account</p>
                </div>
                <Link href="/account/settings" className={linkStyle}>Details <FaArrowRight /></Link>
            </div>
            <div className={sectionStyle}>
                <p>Order online</p>
                <Link href="/account/menu" className={linkStyle}>Details <FaArrowRight /></Link>
            </div>
            <div className={sectionStyle}>
                <p>Your cart : {profile?.jadeLilyCart?.length} items</p>
                <Link href="/account/cart" className={linkStyle}>Details <FaArrowRight /></Link>
            </div>
            <div className={sectionStyle}>
                <p>Book a table</p>
                <Link href="/account/reservations" className={linkStyle}>details <FaArrowRight /></Link>
            </div>
        </section>
    )
}