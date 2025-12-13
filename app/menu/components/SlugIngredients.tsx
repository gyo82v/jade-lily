import { getItemBySlug } from "@/firebase/dishCollectionAdmin";
import { DishDetailsIngredients } from "@/components/dishes";

type Props = {
    slug : string
}

export default async function SlugIngredients({slug}:Props){
    const data = await getItemBySlug(slug)
    return <DishDetailsIngredients ingredients={data?.ingredients} allergies={data?.allergies}/>

}