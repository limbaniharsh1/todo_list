// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBADvN8pcWFvIU4KhEtKz4In7sESvVTxRI",
  authDomain: "react-973b4.firebaseapp.com",
  projectId: "react-973b4",
  storageBucket: "react-973b4.appspot.com",
  messagingSenderId: "1051331703139",
  appId: "1:1051331703139:web:f770a41140b5cb9cc1a356",
  measurementId: "G-67C1K6C3JK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const googleauth = () =>{
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth,provider)
}
export const signout =()=>{
    return auth.signOut()
}