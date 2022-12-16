import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdH8xHseeyc6kKjSAGbHZUtTWyGhpLvEA",
  authDomain: "e-commerce-1050c.firebaseapp.com",
  projectId: "e-commerce-1050c",
  storageBucket: "e-commerce-1050c.appspot.com",
  messagingSenderId: "585620722167",
  appId: "1:585620722167:web:e4e4894919abe2b0ee5ef2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
