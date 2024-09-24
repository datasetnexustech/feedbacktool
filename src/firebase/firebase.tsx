// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlaXt87liuU_Ep1SrNZmgO93DH5-daiao",
  authDomain: "feedbacktool-16414.firebaseapp.com",
  projectId: "feedbacktool-16414",
  storageBucket: "feedbacktool-16414.appspot.com",
  messagingSenderId: "998644063561",
  appId: "1:998644063561:web:0b86ac3b5955d261be0e98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth: Auth = getAuth(app);

export { app, auth };
