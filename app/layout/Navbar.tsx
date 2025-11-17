"use client"

import { usePathname } from "next/navigation";
import Navlink from "@/components/Navlink";

export default function Navbar(){
    const pathname = usePathname()
    const nav = `flex`
    const ul = `flex`
    const div = `flex`
    const p = `px-4`
    return(
        <nav className={nav}>
            <ul className={ul}>
                <Navlink href="/" isActive={pathname === "/"}>Home</Navlink>
                <Navlink href="/about" isActive={pathname.startsWith("/about")}>About</Navlink>
                <Navlink href="/menu" isActive={pathname.startsWith("/menu")}>Menu</Navlink>
            </ul>
            <ul className={div}>
                <Navlink href="/account" isActive={pathname.startsWith("/account")}>Account</Navlink>
                <Navlink href="/login" isActive={pathname.startsWith("/login")}>log in</Navlink>
            </ul>
        </nav>
    )

}