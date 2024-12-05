// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaDV18G3BszG16RLdw1ZEzCmkrJe9eFEI",
  authDomain: "sapathportfolio.firebaseapp.com",
  projectId: "sapathportfolio",
  storageBucket: "sapathportfolio.firebasestorage.app",
  messagingSenderId: "986910999989",
  appId: "1:986910999989:web:ffadabff4680f7629b45fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);