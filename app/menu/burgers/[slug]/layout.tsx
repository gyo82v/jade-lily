
import { DishDetailsHeader, DishDetailsFooter } from "@/components/dishes"
import { getItemBySlug } from "@/firebase/dishCollectionAdmin"

type Props = {
    params : Promise<{slug : string}>
    children : React.ReactNode;
}

export default async function DishDetailsLayout({params, children}:Props){
    const {slug} = await params
    const data = await getItemBySlug(slug)
    return(
        <div>
            <article>
                <DishDetailsHeader data={data} />
                {children}
                <DishDetailsFooter />
            </article>
        </div>
    )
}