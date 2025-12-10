import { getItemBySlug } from "@/firebase/dishCollectionAdmin"

type Props = {
    params : Promise<{slug : string}>
}

export default async function DetailsBurgersPage({params}:Props){
    const {slug} = await params
    const data = await getItemBySlug(slug)

    return(
        <div>
            <p>{data?.description}</p>
            <p>{data?.tags}</p>
            <div>
                <p>{data?.rating}</p>
                <p>{data?.popularity}</p>
            </div>
        </div>
    )
}