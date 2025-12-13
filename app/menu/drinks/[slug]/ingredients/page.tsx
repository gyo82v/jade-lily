import SlugIngredients from "@/app/menu/components/SlugIngredients"
import type { DishDetailPageProps } from "@/types"

export default async function IngredientsPage({params}:DishDetailPageProps){
    const {slug} = await params
    return <SlugIngredients slug={slug} />
}