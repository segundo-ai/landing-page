import type { APIRoute } from "astro";
import { savePotentialCustomer } from "@/utils/data/createCustomer";

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

    // Save to database
    const result = await savePotentialCustomer(sanitizedName, sanitizedEmail);

    return new Response(
      JSON.stringify({
        success: true,
        id: result.id,
        message: "Contact form submitted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error saving contact form:", error);
    
    // Handle errors from the data layer
    const errorMessage = error?.message || "Failed to submit contact form. Please try again later.";
    const errorId = error?.errorId || "submitFailed";
    
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

