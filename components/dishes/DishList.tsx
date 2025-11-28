import { DishCard } from "./DishCard"
import type { DishProps } from "@/types"

type Props = {
    data : DishProps[]
}

export function DishList({data}:Props){
   
    const dishArray = data.map(dish => <DishCard key={dish.id} data={dish} /> )
  return(
    <div>
        {dishArray}
    </div>
  )
}