"use client"

import { signOut } from "@/firebase/authClient"
import { Button } from "@/components"
import { primaryButtonStyles } from "@/components/styles"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LogoutPage(){
    const router = useRouter()
    const handleSignOut = async () => {
        await signOut()
        router.replace("/sign-in?signed-out=1")
    }

    return(
        <section className="p-4 flex flex-col items-center w-full">
            <div className="flex flex-col items-center gap-8 mx-auto mt-20 w-10/12 ">
              <p className="text-2xl font-bold text-center">Are you sure you want to sign out?</p>
              <div className="flex gap-4 w-full ">
                   <Button onClick={handleSignOut} className="flex-1">Yes</Button>
                   <Link href="/" className={`${primaryButtonStyles} flex-1`}>No</Link>
              </div>
            </div>    
        </section>
    )
}