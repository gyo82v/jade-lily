import { getItemBySlug } from "@/firebase/dishCollectionAdmin"
import { DishDetailsIngredients } from "@/components/dishes"

type Props = {
    params : Promise<{slug : string}>
}

export default async function IngredientsPage({params}:Props){
    const {slug} = await params
    const data = await getItemBySlug(slug)
    return(
        <DishDetailsIngredients />
    )
}