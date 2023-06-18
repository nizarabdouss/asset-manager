// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKp-eaDbOADHo-aeC7lUZ9K_DIohnkR8U",
  authDomain: "asset-manager-9e01b.firebaseapp.com",
  projectId: "asset-manager-9e01b",
  storageBucket: "asset-manager-9e01b.appspot.com",
  messagingSenderId: "923713786102",
  appId: "1:923713786102:web:2c2bc9fa066aa1e1ecdcd7",
  measurementId: "G-DXQPHEH8V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);