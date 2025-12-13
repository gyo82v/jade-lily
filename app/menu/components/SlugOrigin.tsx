import { getItemBySlug } from "@/firebase/dishCollectionAdmin";
import { DishDetailsOrigin } from "@/components/dishes";
type Props = {
    slug : string
}

export default async function SlugOrigin({slug}:Props){
    const data = await getItemBySlug(slug)
    return <DishDetailsOrigin origin={data?.origin} />

}