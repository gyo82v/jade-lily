"use client"

import {useState, useCallback, memo} from "react"
import AccountActionBtn from "./AccountActionBtn"
import { HiPlus, HiCheck } from "react-icons/hi";
import { useAuth } from "@/firebase/authProvider";
import { Spinner } from "@/components/ui";
import type { DishForCart } from "@/types";

type Props = {
    userId : string
    dish : DishForCart
    amount? : number
    className? : string
}

function AddToCartBtn({userId, dish, amount = 1}:Props){
    const {addToCart} = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleClick = useCallback(async () => {
        if(isLoading) return
        setIsLoading(true)
        try{
            await addToCart(userId, dish, amount)
            setIsSuccess(true)
            setTimeout(() => setIsSuccess(false), 1200)
        }catch(err){
            console.error("failed to add the item to the cart:", err)
        }finally{
            setIsLoading(false)
        }
    }, [userId, dish, amount,addToCart, isLoading])

    return(
        <AccountActionBtn onClick={handleClick} aria-label="add to cart">
            { 
              isLoading ?
              <Spinner /> : isSuccess ?
              <HiCheck className="h-6 w-6" /> :
              <HiPlus className="h-6 w-6" />
            }
        </AccountActionBtn>
    )
}

export default memo(AddToCartBtn)

