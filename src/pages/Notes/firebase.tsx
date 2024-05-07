// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMP-GGeDJDjlajgBS8CaulYAgPV4Ag1As",
  authDomain: "martisano-d4b08.firebaseapp.com",
  projectId: "martisano-d4b08",
  storageBucket: "martisano-d4b08.appspot.com",
  messagingSenderId: "863136203345",
  appId: "1:863136203345:web:a86d126e343526dc882e70",
  measurementId: "G-23RGNFNBNV"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export{db}