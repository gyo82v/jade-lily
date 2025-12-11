import { getItemBySlug } from "@/firebase/dishCollectionAdmin"
import { DishDetailsOrigin } from "@/components/dishes"

type Props = {
    params : Promise<{slug : string}>
}

export default async function OriginPage({params}:Props){
    const {slug} = await params
    const data = await getItemBySlug(slug)

    return(
        <DishDetailsOrigin />
    )
}