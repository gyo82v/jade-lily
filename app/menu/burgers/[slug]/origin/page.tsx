import { getItemBySlug } from "@/firebase/dishCollectionAdmin"

type Props = {
    params : Promise<{slug : string}>
}

export default async function OriginPage({params}:Props){
    const {slug} = await params
    const data = await getItemBySlug(slug)

    return(
        <section>
            <p>{data?.origin}</p>
        </section>
    )
}