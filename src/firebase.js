import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRLMHjMmghPRhM8C4mc98PUyhNPxnyLkk",
  authDomain: "anjumanhatimi-2e746.firebaseapp.com",
  projectId: "anjumanhatimi-2e746",
  storageBucket: "anjumanhatimi-2e746.appspot.com",
  messagingSenderId: "314412751285",
  appId: "1:314412751285:web:a2e61a3efda07b7b2261fc",
  measurementId: "G-J989FVH6LV"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
