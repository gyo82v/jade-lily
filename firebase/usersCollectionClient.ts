import {doc, updateDoc, increment} from "firebase/firestore"
import { db } from "./firebase";

export async function addUserCredit(userId:string, amount:number){
    if(amount <= 0) throw new Error("Amount must be positive");
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {jadeLilyCredit: increment(amount)});
}