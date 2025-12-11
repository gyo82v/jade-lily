import { getItemBySlug } from "@/firebase/dishCollectionAdmin"
import { DishDetails } from "@/components/dishes"

type Props = {
    params : Promise<{slug : string}>
}

export default async function DetailsBurgersPage({params}:Props){
    const {slug} = await params
    const data = await getItemBySlug(slug)

    return(
        <DishDetails data={data} />
    )
}