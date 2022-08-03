// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk2jGK9cU9tq8cp9pBVzjma9PNQZPhWm4",
  authDomain: "bookacar-43e8d.firebaseapp.com",
  databaseURL: "https://bookacar-43e8d-default-rtdb.firebaseio.com",
  projectId: "bookacar-43e8d",
  storageBucket: "bookacar-43e8d.appspot.com",
  messagingSenderId: "650279944579",
  appId: "1:650279944579:web:6c0a9e8f360cf6dfbd76b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);