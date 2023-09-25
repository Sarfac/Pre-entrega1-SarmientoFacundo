import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDcg5m9NX-GXM3ChOw2Xx6dEFjdicEW-ag",
  authDomain: "brave-night-397620.firebaseapp.com",
  projectId: "brave-night-397620",
  storageBucket: "brave-night-397620.appspot.com",
  messagingSenderId: "438071956886",
  appId: "1:438071956886:web:bda1f8337542381574f9b7",
  measurementId: "G-2TECR1975W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const datos  = getFirestore(app)