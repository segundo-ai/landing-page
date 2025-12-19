// Server-side Firebase initialization
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN || import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID || import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET || import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID || import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID || import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase app (only if not already initialized)
let app;
const apps = getApps();
if (apps.length === 0) {
  // Validate that we have the required config
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error(
      "Firebase configuration is missing. Please set FIREBASE_API_KEY and FIREBASE_PROJECT_ID environment variables."
    );
  }
  app = initializeApp(firebaseConfig);
} else {
  app = apps[0];
}

// Get Firestore instance
export const db = getFirestore(app);

