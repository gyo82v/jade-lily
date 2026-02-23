please consider these Next.js components :

AccountDishCard :

"use client";

import Link from "next/link";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import { transitions, disabledEffects, focusEffects } from "@/components/styles";
import { IconWrapper } from "@/components/IconWrapper";
import { renderIcon } from "@/lib/utilsIcons";
import type { DishProps } from "@/types";

type Props = {
  dish: DishProps;
  userId: string;
};

export default function AccountDishCard({ dish, userId }: Props) {
  const imgSrc =
    dish.imageUrlThumb || dish.imageUrlFull || "/images/placeholder.png";

  const cardBase = `
    group flex flex-row md:flex-col items-stretch overflow-hidden rounded-lg
    grad-primary text-orange-800
    shadow-lg ${transitions} ${disabledEffects}
    hover:shadow-xl 
  `;

  return (
    <li className="h-full">
      <article className={cardBase}>
        {/* LINK WRAPS IMAGE + CONTENT */}
        <Link
          href={`/menu/${dish.category}/${dish.slug}`}
          className={`flex flex-1 flex-row md:flex-col ${focusEffects}`}
          title={`Open ${dish.name} details`}
        >
          <figure
            className="
              relative flex-shrink-0 w-44 h-28
              md:w-full md:h-full md:aspect-square
              rounded-l-lg md:rounded-l-none md:rounded-t-lg
              overflow-hidden
            "
            aria-hidden="true"
          >
            <Image
              src={imgSrc}
              alt={dish.name}
              fill
              sizes="(max-width: 768px) 112px, (max-width: 1024px) 320px, 400px"
              className="
                object-cover w-full h-full
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </figure>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col justify-center p-3 md:p-4 md:gap-2">
            <div className="flex flex-col md:flex-row md:justify-between gap-3">
              <h3 className="font-dancing text-lg md:text-xl font-semibold leading-tight truncate">
                {dish.name}
              </h3>
              <p className="md:ml-0 font-semibold text-base md:text-lg tabular-nums">
                £{dish.price}
              </p>
            </div>

            {/* ICON — desktop only */}
            <div className="mt-2 hidden md:flex items-center gap-3">
              <IconWrapper type={dish.type} className="py-1 px-2 rounded-md">
                <span aria-hidden="true">{renderIcon(dish.type)}</span>
              </IconWrapper>
              <span className="text-sm text-stone-600">{dish.type}</span>
            </div>
          </div>
        </Link>

        <div className="pr-2 md:p-4 flex items-center justify-center md:w-full md:border-2 md:border-purple-500">
          <AddToCartBtn
            className="h-10 w-full border-2 border-green-500"
            userId={userId}
            dish={{
              name: dish.name,
              price: dish.price,
              dishId: dish.id,
            }}
            amount={1}
          />
        </div>
      </article>
    </li>
  );
}

AddToCartBtn :

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

function AddToCartBtn({className, userId, dish, amount = 1}:Props){
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
        <AccountActionBtn onClick={handleClick} aria-label="add to cart" className={className}>
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

AccountActionBtn :

"use client"

import { primaryAccountButtonStyle, defaultTransition } from "@/components/styles";
import {memo} from "react"

type Props = React.ComponentPropsWithoutRef<"button">

function AccountActionBtn({className, children ,...rest}:Props){
    
    return(
        <button 
          className={`${primaryAccountButtonStyle} ${defaultTransition}
                      ${className ? "" : " h-10 w-10"} hover:scale-115`} {...rest} 
        >
            {children}
        </button>
    )
}

export default memo(AccountActionBtn)


please lets focus on the "className" prop.

why at the moment the className => className="h-10 w-full border-2 border-green-500" is not applied ?