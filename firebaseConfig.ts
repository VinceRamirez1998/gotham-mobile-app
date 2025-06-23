// firebaseConfig.ts or firebaseConfig.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCKwbRZsRariLI7KT1_MoKA9lFKsbfkSc",
  authDomain: "gotham-auto-mobile-appli-8c257.firebaseapp.com",
  projectId: "gotham-auto-mobile-appli-8c257",
  storageBucket: "gotham-auto-mobile-appli-8c257.appspot.com",
  messagingSenderId: "959316126052",
  appId: "1:959316126052:web:7f8947ca41405f80a4b271",
};

// Only initialize once
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Check if running in React Native (not Web)
let auth;
if (typeof window === "undefined") {
  // Only initialize if not already
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e) {
    // fallback if already initialized
    auth = getAuth(app);
  }
} else {
  auth = getAuth(app);
}

export { app, auth };
