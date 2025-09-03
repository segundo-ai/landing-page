import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

export async function createPotentialCustomer(name: string, email: string) {
  try {
    const docRef = await addDoc(collection(db, "potential-customers"), {
      name: name,
      email: email,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e: any) {
    console.error("Error adding document: ", e);
    return null;
  }
}
