import { DishCard } from "./DishCard"
import type { DishProps } from "@/types"

type Props = {
    data : DishProps[]
}

export function DishList({data}:Props){
  const div = `grid grid-cols-2 gap-2 my-5`
   
    const dishArray = data.map((dish, i ) => <DishCard key={dish.id} data={dish} priority={i === 0} /> )
  return(
    <section className={div}>
        {dishArray}
    </section>
  )
}