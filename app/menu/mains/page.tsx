import MenuPage from "../components/MenuPage"
import type { SearchParamsProp } from "@/types"

export default async function MainsPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <MenuPage value="mains" pathname="/menu/mains" params={params} />
    )
}