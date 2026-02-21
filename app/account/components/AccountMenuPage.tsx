"use client"

import { useEffect, useState} from "react"
import { getItems } from "@/firebase/dishCollectionClient"
import type { DishProps } from "@/types"
import { useAuth } from "@/firebase/authProvider"
import { MenuFilter } from "@/components/filters"
import AccountDishList from "./AccountDishList"

type Props = {
    category? : string
    pathname : string
    params : Record<string, string | string[] | undefined>
}

export default function AccountMenuPage({category, params, pathname}:Props){
    const [dishes, setDishes] = useState<DishProps[]>([])
    const {user, loading} = useAuth()
    const filtersArr = [...new Set(dishes.map(dish => dish.type))]
    const activeType = params?.type
    const filteredDishes = activeType ? dishes.filter(dish => dish.type === activeType) : dishes

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
    return (
    <div>
      <MenuFilter array={filtersArr} params={activeType} pathname={pathname}  />
      <AccountDishList dishes={filteredDishes} userId={user.uid} />
    </div>
    )
}

