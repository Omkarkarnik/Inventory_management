// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvzZAETMERYw0ay9D9-hAYzOXa_qLEhcw",
  authDomain: "inventory-management-56dd3.firebaseapp.com",
  projectId: "inventory-management-56dd3",
  storageBucket: "inventory-management-56dd3.appspot.com",
  messagingSenderId: "104673533439",
  appId: "1:104673533439:web:7952598918cc5d305f9bca",
  measurementId: "G-3DJYQFKKQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}