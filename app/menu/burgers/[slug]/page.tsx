import { DishDetails } from "@/components/dishes"
import { getItemBySlug } from "@/firebase/dishCollectionAdmin"
import type { DishDetailPageProps, DishProps } from "@/types"

export default async function DetailsBurgersPage({params}:DishDetailPageProps){
    const {slug} = await params
    const data = await getItemBySlug(slug)
  
    return(
        <div>
            <DishDetails data={data} />
        </div>
    )
}