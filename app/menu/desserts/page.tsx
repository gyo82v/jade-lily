import { getItems } from "@/firebase/dishCollectionAdmin"
import { DishList } from "@/components/dishes"
import type { DishProps } from "@/types"

export default async function DessertsPage(){
    let data:DishProps[] = []
    try {
        data = await getItems("category", "desserts")
    }catch(err){
        console.error("there was an error in getItems: ", err)
    }

    return(
        <div>
            <section>
                <p>Filters here</p>
            </section>
            <DishList data={data} />
        </div>
    )
}