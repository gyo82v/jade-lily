import { getFilteredItems } from "@/lib/utilsAdmin"
import { DishList } from "@/components/dishes"
type Props = {
    value : string
}
export default async function MenuPage({value}:Props){
    const data = await getFilteredItems("category", value)

    return(
        <div className="p-2">
            <section>
                <p>filters here</p>
            </section>
            <DishList data={data} />
        </div>
    )

}