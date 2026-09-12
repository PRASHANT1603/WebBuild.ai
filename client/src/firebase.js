// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webbuilder-6f8fa.firebaseapp.com",
  projectId: "webbuilder-6f8fa",
  storageBucket: "webbuilder-6f8fa.firebasestorage.app",
  messagingSenderId: "409568000698",
  appId: "1:409568000698:web:24a7e6a263e3f6e67b6083",
  measurementId: "G-HVLY5YG97R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
