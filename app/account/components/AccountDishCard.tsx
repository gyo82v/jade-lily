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
  const imgSrc = dish.imageUrlThumb || dish.imageUrlFull || "/images/placeholder.png";
  const cardBase = `group flex flex-row md:flex-col items-stretch overflow-hidden rounded-lg
                    bg-gradient-to-br from-orange-100 to-orange-50 text-orange-800
                    shadow-lg ${transitions} ${disabledEffects} hover:shadow-xl active:scale-95`;

  return (
    <li className="h-full">
      <article className={cardBase}>
        {/* IMAGE: flush to edge. rounded-l on mobile, rounded-t on md+ */}
        <figure
          className="relative flex-shrink-0 w-46 h-30 md:h-full md:w-full md:aspect-square
                     md:rounded-t-lg rounded-l-lg overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src={imgSrc}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 112px, (max-width: 1024px) 320px, 400px"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </figure>

        {/* MAIN CONTENT (link) */}
        <div className={`flex-1 flex md:flex-col items-center justify-between md:justify-start p-3 md:p-4`}>
          <Link
            href={`/menu/${dish.category}/${dish.slug}`}
            className={`block ${focusEffects}`}
            title={`Open ${dish.name} details`}
            aria-label={`Open ${dish.name} details`}
          >
            <div className="flex flex-col md:flex-row items-start gap-3">
              {/* Title */}
              <h3 className="font-dancing text-lg md:text-xl font-semibold leading-tight truncate">
                {dish.name}
              </h3>

              {/* Price (on same row for mobile; moves visually below on md when space allows) */}
              <div className="ml-auto md:ml-0">
                <p className="font-semibold text-base md:text-lg tabular-nums">£{dish.price}</p>
              </div>
            </div>

            {/* Icon + type: hidden on mobile, visible on md+ */}
            <div className="mt-2 hidden md:flex items-center gap-3">
              <IconWrapper type={dish.type} className="py-1 px-2 rounded-md">
                <span aria-hidden="true">{renderIcon(dish.type)}</span>
              </IconWrapper>
              <span className="text-sm text-stone-600">{dish.type}</span>
            </div>
          </Link>

          <div className="mt-2 md:mt-4 flex items-center md:justify-start">
            <AddToCartBtn
              userId={userId}
              dish={{ name: dish.name, price: dish.price, dishId: dish.id }}
              amount={1}
            />
          </div>
        </div>
      </article>
    </li>
  );
}

/*
import Link from "next/link"
import Image from "next/image"
import AddToCartBtn from "./AddToCartBtn"
import { transitions, disabledEffects, focusEffects } from "@/components/styles"
import type { DishProps } from "@/types"

type Props = {
    dish : DishProps
    userId : string
}

export default function AccountDishCard({dish, userId}:Props){
    const container = `flex gap-2 p-4 grad-primary shadow-lg rounded-lg w-full`

    return(
        <li className="h-full">
            <article className={`${container} ${transitions} ${disabledEffects} group block h-full hover:shadow-xl group-hover:scale-[1.02] group-hover:shadow-2xl active:scale-95`}>
                <Link 
                  href={`/menu/${dish.category}/${dish.slug}`} 
                  className={`flex gap-3 flex-4 ${focusEffects} `}
                >
                  <figure className="relative w-full overflow-hidden">
                    <Image
                      width={1024} 
                      height={680} 
                      alt={dish.name} 
                      src={dish.imageUrlFull} 
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"                    
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
                      userId={userId} 
                      dish={{name: dish.name, price : dish.price, dishId : dish.id}} 
                      amount={1} 
                    />
                </div>   
            </article>
        </li>
    )
}
    */