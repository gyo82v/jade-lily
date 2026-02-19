import AccountMenuPage from "../../components/AccountMenuPage"
import type { SearchParamsProp } from "@/types"

export default async function DrinksPage({searchParams}:SearchParamsProp){
    const params = await searchParams
    return(
        <AccountMenuPage category="drinks" params={params} pathname="/account/menu/drinks" />
    )
}