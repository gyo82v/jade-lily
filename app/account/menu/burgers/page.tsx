import AccountMenuPage from "../../components/AccountMenuPage"
import type { SearchParamsProp } from "@/types"

export default async function BurgersPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return (
        <AccountMenuPage category="burgers" params={params} pathname="/account/menu/burgers" />
    )
}