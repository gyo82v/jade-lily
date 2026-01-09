"use client"

import { signOut } from "@/firebase/authClient"
import { Navlink } from "@/components"
import { useState } from "react"
import { Button } from "@/components"

export default function LogoutPage(){
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    const handleLogout = async () => {
        await signOut()
        setIsLoggedOut(true)
    }
    const link = `bg-gradient-to-br from-rose-100 via-orange-200 to-pink-300 
                  font-bold flex items-center justify-center text-lg px-4 
                  rounded-lg shadow-lg`
    return(
        <section className="p-4 flex flex-col items-center">
            {isLoggedOut ?
             (<div>
                <p>You have signed out.</p>
             </div>)  :
            (
            <div className="flex flex-col items-center mx-auto">
              <p className="text-lg font-bold">Are you sure ?</p>
              <div className="flex">
                   <Button onClick={handleLogout}>Yes</Button>
                   <Navlink href="/" className={link}>No</Navlink>
              </div>
            </div>
        ) 
          }  
        </section>
    )
}