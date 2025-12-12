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
        <div className="p-4 flex flex-col items-center">
            <article className="rounded-lg custom-shadow p-4 bg-gradient-to-br from-orange-50 to-orange-100">
                <DishDetailsHeader data={data} />
                <section className="flex flex-col h-50 justify-center  my-4 bg-orange-50  rounded-lg shadow-lg shadow-orange-300/30 p-4">
                    {children}
                </section>
                <DishDetailsFooter available={data?.available} />
            </article>
        </div>
    )
}
