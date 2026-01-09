"use client"

import { signOut } from "@/firebase/authClient"
import { useState } from "react"
import { Button } from "@/components"
import { primaryButtonStyles } from "@/components/styles"
import Link from "next/link"

export default function LogoutPage(){
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    const handleLogout = async () => {
        await signOut()
        setIsLoggedOut(true)
    }

    return(
        <section className="p-4 flex flex-col items-center w-full">
            {isLoggedOut ?
             (<div>
                <p className="text-2xl font-bold mt-20">You have signed out.</p>
             </div>)  :
            (
            <div className="flex flex-col items-center gap-8 mx-auto mt-20 w-10/12 ">
              <p className="text-2xl font-bold text-center">Are you sure you want to sign out?</p>
              <div className="flex gap-4 w-full ">
                   <Button onClick={handleLogout} className="flex-1">Yes</Button>
                   <Link href="/" className={`${primaryButtonStyles} flex-1`}>No</Link>
              </div>
            </div>
        ) 
          }  
        </section>
    )
}