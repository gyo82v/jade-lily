"use client"

import Link from "next/link"
import { useAuth } from "@/firebase/authProvider"
import type { DishProps } from "@/types"
import { useState, useCallback} from "react"
import { HiCheck } from "react-icons/hi";
import { Button } from "../Button"

type Props = {data : DishProps}

export function DishDetailsFooter({data}:Props){
    const {user, addToCart} = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleClick = useCallback(async () => {
        if(isLoading || !user) return 
        setIsLoading(true)
        try{
            await addToCart(user.uid, {name: data.name, price: data.price, dishId: data.id}, 1)
            setIsSuccess(true)
            setTimeout(() => setIsSuccess(false), 1500)
        }catch(err){
            console.error("failed to add the item to the cart:", err)
        }finally{
            setIsLoading(false)
        }
    }, [user, data, addToCart, isLoading])

    const style = `bg-gradient-to-br from-pink-100 via-orange-200 to-rose-300 
                   py-2 h-12 flex items-center justify-center font-bold text-lg shadow-lg rounded-lg  block
                   text-center`
    return(
        <footer className="mt-6">
            { 
              !data?.available ?
                <p className={style}>Eat in only</p> :
              !user ? 
                <Link href="/sign-in" className={style}>Sign in to order</Link> :
                <Button
                  className="h-12"
                  onClick={handleClick}
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                   {
                     isSuccess ?
                    <HiCheck className="h-6 w-6 mx-auto" /> :
                    "Add to cart"   
                   }
                </Button>
            }
        </footer>
    )
}
