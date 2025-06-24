import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// @ts-ignore
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyCCKwbRZsRariLI7KT1_MoKA9lFKsbfkSc",
  authDomain: "gotham-auto-mobile-appli-8c257.firebaseapp.com",
  projectId: "gotham-auto-mobile-appli-8c257",
  storageBucket: "gotham-auto-mobile-appli-8c257.appspot.com",
  messagingSenderId: "959316126052",
  appId: "1:959316126052:web:7f8947ca41405f80a4b271",
};

// Always use one app instance (avoid re-initializing)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth;
if (Platform.OS === "web") {
  // On web, use getAuth directly (no persistence setup)
  auth = getAuth(app);
} else {
  // On native, use initializeAuth with persistence
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e) {
    // If already initialized, fallback to getAuth
    auth = getAuth(app);
  }
}

export { app, auth };
export const db = getFirestore(app);
export const storage = getStorage(app);
