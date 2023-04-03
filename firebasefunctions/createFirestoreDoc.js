import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase-config";

export async function createFirestoreDoc(collectionName, object) {
  const dbRef = collection(db, collectionName);
  //console.log(`adding the doc..`);
  try {
    await addDoc(dbRef, object);
  } catch (error) {
    //console.log(error);
  }
}
