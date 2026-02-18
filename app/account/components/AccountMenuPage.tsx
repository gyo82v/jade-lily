"use client"

import { useEffect, useState } from "react"
import { getItems } from "@/firebase/dishCollectionClient"
import type { DishProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { transitions, disabledEffects, focusEffects } from "@/components/styles"
import { useAuth } from "@/firebase/authProvider"
import AddToCartBtn from "./AddToCartBtn"
import AccountMenuFilters from "../menu/layout/AccountMenuFilters"

type Props = {
    category? : string
}

export default function AccountMenuPage({category}:Props){
    const [dishes, setDishes] = useState<DishProps[]>([])
    const {user, loading} = useAuth()
    const filtersArr = [...new Set(dishes.map(dish => dish.type))]
    console.log("Filter array: ", filtersArr)
    
    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getItems({available : true, category})
                if(!data) throw new Error("no data available")
                setDishes(data)
            }catch(err){
               console.error("failed to fetch data:", err)
            }
        }
        fetchData()
    }, [category])

    if (loading) return <div className="p-6">Loading...</div>
    if (!user) {
        console.error("AccountMenuPage: user missing on protected page");
        return null;
    }

    const container = `flex gap-2 p-4 bg-gradient-to-br from-orange-100 to-orange-50 
                       shadow-lg rounded-lg w-full`
    console.log("menu dihses: ", dishes)

    const dishesArr = dishes?.map(dish => {
        return (
            <article key={dish.id} className={`${container} ${transitions} ${disabledEffects} hover:shadow-xl`}>
                <Link href={`/menu/${dish.category}/${dish.slug}`} className={`flex gap-3 flex-4 ${focusEffects}`}>
                    <figure className="flex-2">
                        <Image 
                          width={400} 
                          height={400} 
                          alt={dish.name} 
                          src={dish.imageUrlThumb} 
                          className="h-24 w-24 rounded-lg shadow-lg" 
                        />
                    </figure>
                    <div className="flex items-center flex-2">
                        <p className="font-bold font-dancing text-2xl">{dish.name}</p>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <p className="text-neutral-400 font-bold text-lg">£{dish.price}</p>
                    </div>
                </Link>
                <div className="flex items-center justify-center flex-1">
                    <AddToCartBtn
                       userId={user.uid} 
                       dish={{name: dish.name, price : dish.price, dishId : dish.id}} 
                       amount={1} 
                     />
                </div>
            </article>
        )
    })


    return (
        <div>
            <AccountMenuFilters filtersArr={filtersArr} />
            <section className="flex flex-col gap-5 my-10 w-11/12 mx-auto">
                {dishesArr}
            </section>
            {dishesArr}
        </div>
    )
}