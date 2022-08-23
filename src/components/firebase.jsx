import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyDgiDVpxALNEkSU6Oj6v685WjD9dkxgInc",
  authDomain: "clone-508b5.firebaseapp.com",
  projectId: "clone-508b5",
  storageBucket: "clone-508b5.appspot.com",
  messagingSenderId: "883383552480",
  appId: "1:883383552480:web:eba99ae96bc604ff6d4385"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth, provider };


