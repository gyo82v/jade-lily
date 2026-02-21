import type { DishProps } from "@/types"
import AccountDishCard from "./AccountDishCard"

type Props = {
    dishes : DishProps[]
    userId : string
}


export default function AccountDishList({dishes, userId}:Props){
    const dishesArr = dishes?.map(dish => <AccountDishCard key={dish.id} dish={dish} userId={userId} />)
    return(
        <section className="flex flex-col gap-5 my-10 w-11/12 mx-auto">
            {dishesArr}
        </section>
    )
}