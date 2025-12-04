import MenuPage from "../components/MenuPage"
import type { SearchParamsProp } from "@/types"

export default async function SidesPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <MenuPage value="sides" pathname="/menu/sides" params={params} />
    )
}