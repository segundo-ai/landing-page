import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/utils/data/firebase";

/**
 * Saves a potential customer to Firestore
 * @param name - Sanitized customer name
 * @param email - Sanitized customer email
 * @returns Object with success status and document ID
 * @throws Error with Firebase-specific error information
 */
export async function savePotentialCustomer(
  name: string,
  email: string
): Promise<{ success: true; id: string }> {
  // Check if db is initialized
  if (!db) {
    throw new Error("Database not initialized");
  }

  try {
    // Save to Firestore
    const docRef = await addDoc(collection(db, "potential-customers"), {
      name,
      email,
      createdAt: serverTimestamp(),
    });

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error: any) {
    console.error("Error saving potential customer:", error);
    
    // Provide more specific error message for permission errors
    const isPermissionError = error?.code === 'permission-denied' || error?.message?.includes('PERMISSION_DENIED');
    
    if (isPermissionError) {
      const permissionError = new Error(
        "Firestore permission error. Please update your Firestore security rules to allow writes to the 'potential-customers' collection."
      ) as Error & { errorId?: string };
      permissionError.errorId = "permissionError";
      throw permissionError;
    }
    
    const genericError = new Error("Failed to save potential customer") as Error & { errorId?: string };
    genericError.errorId = "submitFailed";
    throw genericError;
  }
}

