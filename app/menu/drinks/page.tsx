import MenuPage from "../components/MenuPage"
import type { SearchParamsProp } from "@/types"

export default async function DrinksPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <MenuPage value="drinks" pathname="/menu/drinks"  params={params} />
    )
}