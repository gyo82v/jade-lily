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

    const nav = `flex items-center `
    const ul = `flex`
    const div = `flex hidden md:block`
    const p = `px-4`
    return(
        <nav className={nav}>
            <div className="hidden md:flex md:items-center ">
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
                        <Navlink href="/login" isActive={pathname.startsWith("/login")}>log in</Navlink>
                     </li>
                   </ul>
                }
            </div>
            <div className="md:hidden flex items-center">
              <button className="mr-4" onClick={() => setIsOpen(!isOpen)}>
                <HiMenu className="h-7 w-7" />
              </button>
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
                        {
                            user ? 
                            <li>
                                <Navlink href="/account">{profile?.displayName}</Navlink>
                            </li>
                            :
                            <li>
                                <Navlink href="/login" isActive={pathname.startsWith("/login")}>Log in</Navlink>
                            </li>
                        }
                    </ul>
                  </div>
                )
              }
            </div>
          
        </nav>
    )
}
