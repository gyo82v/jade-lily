import AccountMenuPage from "../components/AccountMenuPage"
import type { SearchParamsProp } from "@/types"

export default async function Menupage({searchParams}:SearchParamsProp) {
    const params = await searchParams

    return (
        <AccountMenuPage category="" params={params} pathname="/account/menu" />
    ) 
}
