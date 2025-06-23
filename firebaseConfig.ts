// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCKwbRZsRariLI7KT1_MoKA9lFKsbfkSc",
  authDomain: "gotham-auto-mobile-appli-8c257.firebaseapp.com",
  projectId: "gotham-auto-mobile-appli-8c257",
  storageBucket: "gotham-auto-mobile-appli-8c257.appspot.com",
  messagingSenderId: "959316126052",
  appId: "1:959316126052:web:7f8947ca41405f80a4b271",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth instance
export const auth = getAuth(app);

// Optional: Export Firestore/Storage if you use them
// export const db = getFirestore(app);
// export const storage = getStorage(app);
