"use client"

import { usePathname } from "next/navigation";
import { Navlink } from "@/components";
import { useAuth } from "@/firebase/authProvider";

export default function Navbar(){
    const {user, profile} = useAuth()
    const pathname = usePathname()
    const nav = `flex `
    const ul = `flex`
    const div = `flex hidden md:block`
    const p = `px-4`
    return(
        <nav className={nav}>
            <ul className={ul}>
                <li>
                    <Navlink href="/" isActive={pathname === "/"}>Home</Navlink>
                </li>
                <li>
                    <Navlink href="/about" isActive={pathname.startsWith("/about")}>About</Navlink>
                </li>
                <li>
                    <Navlink href="/menu" isActive={pathname.startsWith("/menu")}>Menu</Navlink>
                </li>
            </ul>
            {
                user ? 

                <ul className={div}>
                    <Navlink href="/account">{profile?.displayName}</Navlink>
                    <p className={p}>log out</p>
                </ul>
                :

                 <ul className={div}>
                <li>
                    <Navlink href="/account" isActive={pathname.startsWith("/account")}>Account</Navlink>
                </li>
                <li>
                    <Navlink href="/login" isActive={pathname.startsWith("/login")}>log in</Navlink>
                </li>
            </ul>
            }
        </nav>
    )
}