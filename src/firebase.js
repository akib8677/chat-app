import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXWXndcMkY1s8m6ulWvcosIPVASWPxceg",
  authDomain: "chat-a4a52.firebaseapp.com",
  projectId: "chat-a4a52",
  storageBucket: "chat-a4a52.appspot.com",
  messagingSenderId: "1085432720383",
  appId: "1:1085432720383:web:e179f3440a0c7b542f95ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()