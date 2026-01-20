import { db } from "./firebase";
import {collection, doc, getDoc, getDocs, query, where, QueryConstraint} from "firebase/firestore"
import type { DishProps } from "@/types";

const collectionRef = collection(db, "jade-lily")

//fetch data that matches the parameter if provided. Otherwise fecth everything;client side

type GetItemsFilters = {
  available?: boolean
  category?: string
  tag?: string
}

export async function getItems(filters: GetItemsFilters = {}):Promise<DishProps[]> {
  const constraints: QueryConstraint[] = []

  if (filters.available !== undefined) {
    constraints.push(where("available", "==", filters.available))
  }

  if (filters.category) {
    constraints.push(where("category", "==", filters.category.toLowerCase()))
  }

  if (filters.tag) {
    constraints.push(where("tags", "array-contains", filters.tag.toLowerCase()))
  }

  const q = constraints.length
    ? query(collectionRef, ...constraints)
    : collectionRef

  const querySnapshot = await getDocs(q)
  console.log("filters:", filters)
  console.log("available type:", typeof filters.available)


  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data() as Omit<DishProps, "id">,
  }))
}


//fecth one element form the collection that mathes the ID;client side

export async function getItemById(id:string){
    const docRef = doc(db, "jade-lily", id)
    const jadeLilySnapshot = await getDoc(docRef)
    return {...jadeLilySnapshot.data(), id: jadeLilySnapshot.id}
}





/*export async function getItems(key?:string, value?:string){
    let q
    if(key && value){
         q = query(collectionRef, where(key.toLowerCase(), "==", value))
    }else{
         q = collectionRef  //no filter return all collection
    }
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({...doc.data(), id : doc.id}))
}*/


