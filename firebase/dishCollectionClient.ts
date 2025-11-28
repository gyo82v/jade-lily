import { db } from "./firebase";
import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore"

const collectionRef = collection(db, "jade-lily")

//fetch data that matches the parameter if provided. Otherwise fecth everything;client side

export async function getItems(key?:string, value?:string){
    let q
    if(key && value){
         q = query(collectionRef, where(key.toLowerCase(), "==", value.toLowerCase()))
    }else{
         q = collectionRef  //no filter return all collection
    }
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({...doc.data(), id : doc.id}))
}

//fecth one element form the collection that mathes the ID;client side

export async function getItemById(id:string){
    const docRef = doc(db, "jade-lily", id)
    const jadeLilySnapshot = await getDoc(docRef)
    return {...jadeLilySnapshot.data(), id: jadeLilySnapshot.id}
}