import type { APIRoute } from "astro";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Mark this endpoint as server-rendered (not static)
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse the request body
    const data = await request.json();
    const { name, email } = data;

    // Validate input
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required", errorId: "nameRequired" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Sanitize and validate name (max 100 chars, alphanumeric + spaces/hyphens)
    const sanitizedName = String(name).trim();
    if (sanitizedName.length === 0 || sanitizedName.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name must be between 1 and 100 characters", errorId: "nameLength" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format and length
    const sanitizedEmail = String(email).trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail) || sanitizedEmail.length > 254) {
      return new Response(
        JSON.stringify({ error: "Invalid email format", errorId: "invalidEmail" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check if db is initialized
    if (!db) {
      return new Response(
        JSON.stringify({ error: "Database not initialized", errorId: "databaseError" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, "potential-customers"), {
      name: sanitizedName,
      email: sanitizedEmail,
      createdAt: serverTimestamp(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        id: docRef.id,
        message: "Contact form submitted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error saving contact form:", error);
    
    // Provide more specific error message for permission errors
    const isPermissionError = error?.code === 'permission-denied' || error?.message?.includes('PERMISSION_DENIED');
    const errorMessage = isPermissionError
      ? "Firestore permission error. Please update your Firestore security rules to allow writes to the 'potential-customers' collection."
      : "Failed to submit contact form. Please try again later.";
    const errorId = isPermissionError ? "permissionError" : "submitFailed";
    
    return new Response(
      JSON.stringify({
        error: errorMessage,
        errorId: errorId,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

