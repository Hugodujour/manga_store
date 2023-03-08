import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig ={
    apiKey: "AIzaSyDhBs63XN8FUfZg0FxKj9TZmv2N46ij1qA",
    authDomain: "mangastore-1a6c0.firebaseapp.com",
    databaseURL: "https://mangastore-1a6c0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mangastore-1a6c0",
    storageBucket: "mangastore-1a6c0.appspot.com",
    messagingSenderId: "1052012637916",
    appId: "1:1052012637916:web:ad13b0d0a188bde3b00e19"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  export { auth }