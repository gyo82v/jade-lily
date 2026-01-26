"use client"

import { usePathname } from "next/navigation";
import {Navlink} from "@/components/navbars/Navlink"
import { useAuth } from "@/firebase/authProvider";
import { HiMenu } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { useState } from "react";


export default function Navbar(){
    const {user, profile} = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const nav = `flex items-center `
    const ul = `flex `

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
                   { user ? 
                   <>
                      <li>
                        <Navlink href="/account">{profile?.displayName}</Navlink>
                      </li>
                      <li>
                        <Navlink href="/sign-out" className="inline-flex items-center justify-center h-full"><HiOutlineLogout className="h-5 w-5" /></Navlink>
                      </li>
                   </>
                   :
                   <>
                     <li>
                        <Navlink href="/sign-in" isActive={pathname.startsWith("/sign-in")}>Sign in</Navlink>
                     </li>
                   </>
                   }
                </ul>
            </div>
            <div className="md:hidden flex items-center">
              <button className="mr-4" onClick={() => setIsOpen(!isOpen)}>
                <HiMenu className="h-7 w-7" />
              </button>
              {
                isOpen && 
                  (
                  <div className="absolute right-20 top-20 bg-white shadow-md rounded-md mt-2">
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
                            <>
                              <li>
                                <Navlink href="/account">{profile?.displayName}</Navlink>
                              </li>
                              <li>
                                <Navlink href="/sign-out" className="inline-flex items-center justify-center w-full"><HiOutlineLogout className="h-5 w-5" /></Navlink>
                              </li>
                            </>
                            :
                            <li>
                                <Navlink href="/sign-in" isActive={pathname.startsWith("/sign-in")}>Sign in</Navlink>
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
