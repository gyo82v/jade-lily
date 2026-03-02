import { getFilteredItems, getFilterArray } from "@/lib/utilsAdmin"
import { DishList } from "@/components/dishes"
import { MenuFilter } from "@/components/filters"
import type { MenuProps } from "@/types"

export default async function MenuPage({value, pathname, params}:MenuProps){
    const data = await getFilteredItems("category", value)
    const activeType = params?.type
    const filteredDishes = activeType ? data.filter(dish => dish.type === activeType) : data
    const filtersArr = getFilterArray(data)

    return(
        <div>
            <MenuFilter array={filtersArr} pathname={pathname} params={activeType} />
            <DishList data={filteredDishes} /> 
        </div>
    )
}