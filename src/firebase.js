// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "spacestagram-4da11.firebaseapp.com",
  databaseURL: "https://spacestagram-4da11-default-rtdb.firebaseio.com",
  projectId: "spacestagram-4da11",
  storageBucket: "spacestagram-4da11.appspot.com",
  messagingSenderId: "865872870766",
  appId: "1:865872870766:web:9de83ecbaa9d6ae634557f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
