"use client"

import { signOut } from "@/firebase/authClient"
import { Navlink } from "@/components"
import { useState } from "react"

export default function LogoutPage(){
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    const handleLogout = async () => {
        await signOut()
        setIsLoggedOut(true)
    }
    return(
        <section>
            {isLoggedOut ?
             (<div>
                <p>You have been logged out.</p>
             </div>)  :
            (
            <div>
              <p>Are you sure ?</p>
              <div>
                   <button onClick={handleLogout}>Yes</button>
                   <Navlink href="/">No</Navlink>
              </div>
            </div>
        ) 
          }  
        </section>
    )
}