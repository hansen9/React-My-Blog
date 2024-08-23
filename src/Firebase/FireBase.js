// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQyVJVOihlzkHi-TIQDbQCV4q9ZIq6nFw",
  authDomain: "my-blog-c12b3.firebaseapp.com",
  projectId: "my-blog-c12b3",
  storageBucket: "my-blog-c12b3.appspot.com",
  messagingSenderId: "181250570402",
  appId: "1:181250570402:web:a5ca7d9ee1753a74f2fffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) 
const auth = getAuth(app);

export { app, auth, db }