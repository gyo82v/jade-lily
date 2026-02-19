import AccountMenuPage from "../../components/AccountMenuPage"
import type { SearchParamsProp } from "@/types"

export default async function MainsPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <AccountMenuPage category="mains" params={params} pathname="/account/menu/mains" />
    )
}