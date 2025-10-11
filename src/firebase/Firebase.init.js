// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv3t5CCSQ9GH23F-gxY5i3As4F4IQGSMI",
  authDomain: "mama-691bf.firebaseapp.com",
  projectId: "mama-691bf",
  storageBucket: "mama-691bf.firebasestorage.app",
  messagingSenderId: "523451284047",
  appId: "1:523451284047:web:974628d6fdf33fc604883a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

