"use client"

import { useEffect, useState } from "react"
import { getItems } from "@/firebase/dishCollectionClient"
import type { DishProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

type Props = {
    category? : string
}

export default function AccountMenuPage({category}:Props){
    const [dishes, setDishes] = useState<DishProps[]>([])

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getItems({available : true, category})
                if(!data) throw new Error("no data available")
                setDishes(data)
                return
            }catch(err){
               console.error("failed to fetch data:", err)
            }
        }
        fetchData()
    }, [category])

    console.log("dishes: ", dishes)

    const dishesArr = dishes?.map(dish => {
        return (
            <article key={dish.id}>
                <figure>
                     <Image width={400} height={400} alt={dish.name} src={dish.imageUrlThumb} />
                </figure>
                <div>
                    <p>{dish.name}</p>
                    <p>£{dish.price}</p>
                </div>
                <div>
                     <Link href="/account">Details</Link>
                </div>
                <div>
                    <button onClick={e => {e.stopPropagation(); console.log("item added to the cart")} }>Add</button>
                </div>
            </article>
        )
    })


    return (
        <section>
            {dishesArr}
        </section>
    )
}