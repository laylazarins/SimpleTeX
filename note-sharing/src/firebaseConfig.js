// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBykuRQE6Pq2W6dndmHsqi5uv24n3pb068",
  authDomain: "doc-clone-7d016.firebaseapp.com",
  projectId: "doc-clone-7d016",
  storageBucket: "doc-clone-7d016.appspot.com",
  messagingSenderId: "379965854269",
  appId: "1:379965854269:web:4a60e405c2caa78fe95054",
  measurementId: "G-37Q6YLS5LQ"
};

// Initialize Firebase
console.log("firebase loaded");
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);