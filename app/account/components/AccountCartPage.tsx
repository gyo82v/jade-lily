"use client"

import { useAuth } from "@/firebase/authProvider"
import { Button } from "@/components"

export default function AccountCartPage(){
    const {profile} = useAuth()
    const container = `flex gap-2 p-4 bg-gradient-to-br from-orange-100 to-orange-50 
                       shadow-lg rounded-lg w-full`

    const cartItemsArr = profile?.jadeLilyCart.map(item => {
        return (
            <article key={item.dishId} className={container}>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.price}
                </div>
                <div>
                    {item.qty}
                </div>
                <div>
                    <button>delete</button>
                </div>
            </article>
        )
    })

    return(
        <div>
            <section>
                {cartItemsArr}
            </section>
            <Button>Order now</Button>
        </div>
    )
}