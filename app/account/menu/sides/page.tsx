import AccountMenuPage from "../../components/AccountMenuPage"
import type { SearchParamsProp } from "@/types"

export default async function SidesPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <AccountMenuPage category="sides" params={params} pathname="/account/menu/sides" />
    )
}