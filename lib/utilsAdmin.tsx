import type { DishProps } from "@/types"
import { getItems } from "@/firebase/dishCollectionAdmin"

export async function getFilteredItems(value:string, key:string) {
   let data:DishProps[] = []
   try{
    data = await getItems(value, key) as DishProps[]
    return data
   }catch(err){
    console.error(`there was an error in the getItems function: `, err)
    return []
   }
}

export function getFilterArray(dishesArr:DishProps[]){
   return [...new Set(dishesArr.map(dish => dish.type).filter(Boolean))]
}

