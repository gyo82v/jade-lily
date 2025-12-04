import type { DishProps } from "@/types"
import { getItems } from "@/firebase/dishCollectionAdmin"
import {FaPepperHot, FaLeaf, FaUtensils, FaRegStar} from 'react-icons/fa';
import {GiGrapes, GiFrenchFries, GiCarrot, GiWineGlass, GiGlassShot, GiChocolateBar} from 'react-icons/gi';
import { FiRefreshCw } from 'react-icons/fi';

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

export function renderIcon(filter?:string){
   return filter === "Spicy" ? <FaPepperHot /> :
          filter === "Fruits" ? <GiGrapes /> :
          filter === "Choco" ? <GiChocolateBar /> :
          filter === "Alchool" ? <GiWineGlass /> :
          filter === "No-alchool" ? <GiGlassShot /> :
          filter === "Special" ? <FaRegStar /> :
          filter === "Regular" ? <FaUtensils /> :
          filter === "Vegetarian" ? <FaLeaf /> :
          filter === "Salad" ? <GiCarrot /> :
          filter === "Starter" ? <GiFrenchFries /> : <FiRefreshCw />
}