import { getFilteredItems, getFilterArray } from "@/lib/utilsAdmin"
import { DishList } from "@/components/dishes"
import { MenuFilter } from "@/components/filters"

type Props = {
    value : string
}

export default async function MenuPage({value}:Props){
    const data = await getFilteredItems("category", value)
    const filtersArr = getFilterArray(data)
    console.log("filter array: ", filtersArr)

    return(
        <div className="p-2">
            <MenuFilter array={filtersArr} />
            <DishList data={data} />
        </div>
    )

}