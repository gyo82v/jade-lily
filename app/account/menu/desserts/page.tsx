import AccountMenuPage from "../../components/AccountMenuPage"
import type { SearchParamsProp } from "@/types"

export default async function DessertsPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <AccountMenuPage category="desserts" params={params} pathname="/account/menu/desserts" />
    )
}