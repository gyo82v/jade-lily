import MenuPage from "../components/MenuPage"
import type { SearchParamsProp } from "@/types"

export default async function DessertsPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <MenuPage value="desserts" pathname="/menu/desserts" params={params} />
    )
}