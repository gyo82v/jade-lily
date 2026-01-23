"use client"

import { useAuth } from "@/firebase/authProvider"
import { Button } from "@/components"
import RemoveFromCartBtn from "./RemoveFromCartBtn"
import type { CartItem } from "@/types"

export default function AccountCartPage(){
    const {profile, user} = useAuth()
    if(!user) return <p>Loading</p>
    const container = `flex gap-2 px-4 py-6 bg-gradient-to-br from-orange-100 to-orange-50 
                       shadow-lg rounded-lg w-full  hover:shadow-xl`
   
    const cartItemsArr = ( profile?.jadeLilyCart as CartItem[])?.map(item => { 
        return (
            <article key={item.dishId} className={container}>
                <div className="flex-2">
                    <p className="text-xl font-dancing">{item.name}</p>
                </div>
                <div className="flex-1 flex items-center justify-left">
                    <p className="text-neutral-400 font-bold text-lg">£<span>{item.price}</span></p>
                </div>
                <div className="flex-1 flex items-center justify-left">
                    <p className="font-bold text-lg">Qty:<span className="ml-1">{item.qty}</span></p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <RemoveFromCartBtn userId={user.uid} cartItemId={item.cartItemId}/>
                </div>
            </article>
        )
    })

    return(
        <div>
            <section className="flex flex-col gap-5 my-6">
                {cartItemsArr}
            </section>
            <Button>Order now</Button>
        </div>
    )
}