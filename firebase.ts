import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCMHqplkSS46YX1Dy54hkjdXyDOytG3NHQ",
    authDomain: "ujjwal-portfolio-53029.firebaseapp.com",
    projectId: "ujjwal-portfolio-53029",
    storageBucket: "ujjwal-portfolio-53029.appspot.com",
    messagingSenderId: "142759021970",
    appId: "1:142759021970:web:52b527d70ac37b6eee454b",
    measurementId: "G-GVFVBKQE8D"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const database = getDatabase(app);