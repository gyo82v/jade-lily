"use client"

import { Button } from "@/components"
import { useAuth } from "@/firebase/authProvider"
import RemoveFromOrdersBtn from "./RemoveFromOrdersBtn"


export default function AccountOrdersPage(){
    const {user, profile, clearPastOrders} = useAuth()
    if(!user) return <p>Loading...</p>

    const container = `flex gap-2 px-4 py-6 bg-gradient-to-br from-orange-100 to-orange-50 
                       shadow-lg rounded-lg w-full  hover:shadow-xl`

    const orders = profile?.jadeLilyPastOrders ?? []
 
    const ordersArr = orders.map(order => {
        return(
            <article key={order.id} className={container}>
                <div className="flex-3 flex items-center">
                    <p>{order.dateLabel}</p>
                </div>
                <div className="flex-1 flex items-center justify-left">
                    <p>£{order.price}</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <RemoveFromOrdersBtn userId={user.uid} orderId={order.id} />
                </div>
            </article>
        )
    })
    return(
        <div>
            {
                orders.length > 0 ?
                <>
                   <section className="flex flex-col gap-5 my-6">
                     {ordersArr}
                   </section>
                  <Button onClick={() => clearPastOrders(user.uid)}>Clear all</Button>  
                </> :
                <p>No orders at the momet.</p>
            }
        </div>
    )
}