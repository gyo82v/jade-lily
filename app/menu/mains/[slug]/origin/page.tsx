import SlugOrigin from "@/app/menu/components/SlugOrigin"
import type { DishDetailPageProps } from "@/types"

export default async function OriginPage({params}:DishDetailPageProps){
    const {slug} = await params
    return <SlugOrigin slug={slug}/>
}