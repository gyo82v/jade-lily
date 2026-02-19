import Image from "next/image"
import Link from "next/link"
import AddToCartBtn from "./AddToCartBtn"
import { transitions, disabledEffects, focusEffects } from "@/components/styles"
import type { DishProps } from "@/types"

type Props = {
    dishes : DishProps[]
    userId : string
}


export default function AccountDishList({dishes, userId}:Props){
    const container = `flex gap-2 p-4 bg-gradient-to-br from-orange-100 to-orange-50 
                       shadow-lg rounded-lg w-full`
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
                       userId={userId} 
                       dish={{name: dish.name, price : dish.price, dishId : dish.id}} 
                       amount={1} 
                     />
                </div>
            </article>
        )
    })
    return(
        <section className="flex flex-col gap-5 my-10 w-11/12 mx-auto">
            {dishesArr}
        </section>
    )
}