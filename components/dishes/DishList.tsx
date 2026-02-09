import { DishCard } from "./DishCard"
import type { DishProps } from "@/types"

type Props = {
    data : DishProps[]
}

export function DishList({data}:Props){
  const div = `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
               gap-2 my-5 md:gap-4 lg:gap-6 md:px-4 lg:px-6 xl:px-10
               `
   
    const dishArray = data.map((dish, i ) => <DishCard key={dish.id} data={dish} priority={i === 0} /> )
  return(
    <section className={div}>
        {dishArray}
    </section>
  )
}