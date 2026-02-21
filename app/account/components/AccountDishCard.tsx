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