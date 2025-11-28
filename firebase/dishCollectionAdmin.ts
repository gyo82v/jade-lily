import { adminDb } from "./firebaseAdmin";
import { CollectionReference, Query, DocumentData } from "firebase-admin/firestore";

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

// Fetch single item
export async function getItemById(id: string) {
  const docRef = collectionRef.doc(id);
  const docSnap = await docRef.get();
  return { ...docSnap.data(), id: docSnap.id };
}
