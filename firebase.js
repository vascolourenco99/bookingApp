import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClIlfaNAn-tDyLErPlTHrIm6UUJ3WK4dg",
  authDomain: "booking-project-54a99.firebaseapp.com",
  projectId: "booking-project-54a99",
  storageBucket: "booking-project-54a99.appspot.com",
  messagingSenderId: "135868483742",
  appId: "1:135868483742:web:d0d77fb8042a949924d38f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };