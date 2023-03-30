// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJGy0E4giVuml0u_nU_cAek2OAG_xSsJw",
  authDomain: "newtodolistapplication.firebaseapp.com",
  projectId: "newtodolistapplication",
  storageBucket: "newtodolistapplication.appspot.com",
  messagingSenderId: "333884914155",
  appId: "1:333884914155:web:d03ad6e6fe8db32b1981ae",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
