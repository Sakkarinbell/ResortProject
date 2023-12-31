import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
// import 'firebase/compat/storage'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAemfymFlTS_VCBZasLUDk4Tpp5eDqKdGY",
  authDomain: "project-101-d803d.firebaseapp.com",
  projectId: "project-101-d803d",
  storageBucket: "project-101-d803d.appspot.com",
  messagingSenderId: "148113111577",
  appId: "1:148113111577:web:1420d664ac564c80374888",
  measurementId: "G-R7BLM410XB",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = getStorage(app);
