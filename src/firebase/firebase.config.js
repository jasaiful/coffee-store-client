// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPlQ9O47pFkKvRE3NWtTkAeiWo7PG5V4",
  authDomain: "coffee-store-be88a.firebaseapp.com",
  projectId: "coffee-store-be88a",
  storageBucket: "coffee-store-be88a.appspot.com",
  messagingSenderId: "263197074762",
  appId: "1:263197074762:web:085bf3d60465bbc94c0db3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;