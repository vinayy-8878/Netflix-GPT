// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHzoeEDEKlClRvPgGLdfb2zOi0SulIrOE",
  authDomain: "netflix-gpt-5c04d.firebaseapp.com",
  projectId: "netflix-gpt-5c04d",
  storageBucket: "netflix-gpt-5c04d.appspot.com",
  messagingSenderId: "337538041248",
  appId: "1:337538041248:web:c785b3e4482708061a90c5",
  measurementId: "G-NJPKKTFTQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
