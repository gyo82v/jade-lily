import { getFilteredItems, getFilterArray } from "@/lib/utilsAdmin"
import { DishList } from "@/components/dishes"
import { MenuFilter } from "@/components/filters"

type Props = {
    value : string
    pathname : string
    params : Record<string, string | string[] | undefined>
}

export default async function MenuPage({value, pathname, params}:Props){
    const data = await getFilteredItems("category", value)
    const activeType = params?.type
    const filteredDishes = activeType ? data.filter(dish => dish.type === activeType) : data
    const filtersArr = getFilterArray(data)

    return(
        <div className="p-2 ">
            <MenuFilter array={filtersArr} pathname={pathname} params={activeType} />
            <DishList data={filteredDishes} /> 
        </div>
    )
}