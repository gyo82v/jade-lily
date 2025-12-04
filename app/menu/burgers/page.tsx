import MenuPage from "../components/MenuPage"
import type { SearchParamsProp } from "@/types"

export default async function BurgersPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <MenuPage value="burgers" pathname="/menu/burgers" params={params} />
    )
}