"use client"

import Link from "next/link"
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { useAuth } from "@/firebase/authProvider";

export default function AccountPage(){
    const {user, profile, loading} = useAuth();
    console.log("user profile:", profile);
    console.log("user auth:", user);
    console.log("loading auth state:", loading);

    if (loading) {
        return <div>Loading...</div>;
    }

    const containerStyle = `flex flex-col h-full justify-evenly gap-4 p-4 w-full mt-6 
                            md:grid md:grid-cols-2 md:gap-10 md:mt-12 md:px-18`;

    const sectionStyle = `flex md:flex-col justify-between items-center py-14 px-2 bg-gradient-to-br font-semibold text-lg
                          from-orange-100 to-orange-50 rounded-lg shadow-md 
                          hover:scale-105 transition-transform duration-300 ease-in-out
                          active:scale-95 
                          focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2
                          focus-visible:ring-offset-2 focus-visible:ring-orange-300`;
    const linkStyle = `flex items-center gap-2 md:flex md:flex-col `
    return(
        <section className={containerStyle}>
            <Link href="/account/settings" className={sectionStyle}>
                <div>
                    <p className="font-bold text-xl">Welcome back <span className="font-dancing text-2xl ml-1">{profile?.displayName || "User"}</span>!</p>
                    <p className="font-light">Manage your account</p>
                </div>
                <p className={linkStyle}>
                    Details 
                    <span>
                        <FaArrowRight className="md:hidden" /> 
                        <FaArrowDown className="hidden md:block" />
                    </span>
                </p>
            </Link>
            <Link href="/account/menu" className={sectionStyle}>
                <p>Order online</p>
                <p className={linkStyle}>
                    Details 
                    <span>
                        <FaArrowRight className="md:hidden" /> 
                        <FaArrowDown className="hidden md:block" />
                    </span>
                </p>
            </Link>
            <Link href="/account/cart" className={sectionStyle}>
                <p>Your cart : {profile?.jadeLilyCart?.length} items</p>
                <p className={linkStyle}>
                    Details 
                    <span>
                        <FaArrowRight className="md:hidden" /> 
                        <FaArrowDown className="hidden md:block" />
                    </span>
                </p>
            </Link>
            <Link href="/account/reservations" className={sectionStyle}>
                <p>Reserve a table</p>
                <p className={linkStyle}>
                    Details 
                    <span>
                        <FaArrowRight className="md:hidden" /> 
                        <FaArrowDown className="hidden md:block" />
                    </span>
                </p>
            </Link>
        </section>
    )
}