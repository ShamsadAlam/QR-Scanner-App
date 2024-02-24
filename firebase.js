// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdLNTyItEb17fVDy7LILUiCu0x1X7EjSw",
  authDomain: "qr-code-scanner-4b367.firebaseapp.com",
  projectId: "qr-code-scanner-4b367",
  storageBucket: "qr-code-scanner-4b367.appspot.com",
  messagingSenderId: "333384106453",
  appId: "1:333384106453:web:2d0c467a6113d8be24bd5c",
  measurementId: "G-JK9J2KNZRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export { Auth };
