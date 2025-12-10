import { getItemBySlug } from "@/firebase/dishCollectionAdmin"

type Props = {
    params : Promise<{slug : string}>
}

export default async function IngredientsPage({params}:Props){
    const {slug} = await params
    const data = await getItemBySlug(slug)
    return(
        <section>
            <p>Ingredients: {data?.ingredients}</p>
            <p>Allergies: {data?.allergies}</p>
        </section>
    )
}