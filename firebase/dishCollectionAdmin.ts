import { adminDb } from "./firebaseAdmin";
import { CollectionReference, Query, DocumentData } from "firebase-admin/firestore";
import type { DishProps } from "@/types";

const collectionRef = adminDb.collection("jade-lily");

// Fetch all or with a filter
export async function getItems(key?: string, value?: string) {
  let q: CollectionReference<DocumentData> | Query<DocumentData> = collectionRef;
  if (key && value) {
    q = collectionRef.where(key.toLowerCase(), "==", value.toLowerCase());
  }
  const snapshot = await q.get();
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
}

// Fetch single item by slug
export async function getItemBySlug(slug:string){
  const normalized= slug.toLowerCase()
  const q:CollectionReference<DocumentData> | Query<DocumentData> = 
     collectionRef.where("slug", "==", normalized).limit(1)
  const snapshot = await q.get()
  if(snapshot.empty) return null
  const doc = snapshot.docs[0]
  return {...doc.data(), id: doc.id} as DishProps
}
