import { getItems } from "@/firebase/dishCollectionAdmin"
import { DishList } from "@/components/dishes"

export default async function DessertsPage(){
    let data = []
    try {
        const data = await getItems("category", "desserts")
    }catch(err){
        console.error("there wae an error in getItems: ", err)
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