import { getItems } from "@/firebase/dishCollectionAdmin"


export default async function DessertsPage(){
    const data = await getItems("category", "desserts")
    console.log(data)
    return(
        <p>desserts here</p>
    )
}