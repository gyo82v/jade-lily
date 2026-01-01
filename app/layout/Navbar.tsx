"use client"

import { usePathname } from "next/navigation";
import { Navlink } from "@/components";
import { useAuth } from "@/firebase/authProvider";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";


export default function Navbar(){
    const {user, profile} = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const nav = `flex `
    const ul = `flex`
    const div = `flex hidden md:block`
    const p = `px-4`
    return(
        <nav className={nav}>
            <div className="hidden md:block">
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
                       <p className={p}>log out here</p>
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
            </div>
            <div>
              <button onClick={() => setIsOpen(!isOpen)}><HiMenu /></button>
              {
                isOpen && 
                  (
                  <div className="absolute right-4 bg-white shadow-md rounded-md mt-2">
                    <ul>
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
                  </div>
                )
              }
            </div>
          
        </nav>
    )
}


/*
 <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}><HiMenu /></button>
                { isOpen && 
                    <div className="absolute right-4 bg-white shadow-md rounded-md mt-2">
                        <ul className="flex flex-col p-4">
                            <li>hello</li>
                        </ul>
                }
            </div>






*/ 