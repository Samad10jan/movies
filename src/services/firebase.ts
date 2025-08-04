// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Ke_A8gkwCzYT9TijQG5RkQukBhQW2iM",
  authDomain: "moviess-c2ed8.firebaseapp.com",
  projectId: "moviess-c2ed8",
  storageBucket: "moviess-c2ed8.firebasestorage.app",
  messagingSenderId: "495250180318",
  appId: process.env.FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;