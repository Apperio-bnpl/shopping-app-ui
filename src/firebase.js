import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk6LxtoGVRKo9oU0uWx_a38A_Upl6Ohp0",
  authDomain: "e-clone-f9bc3.firebaseapp.com",
  projectId: "e-clone-f9bc3",
  storageBucket: "e-clone-f9bc3.appspot.com",
  messagingSenderId: "242457971578",
  appId: "1:242457971578:web:61db7060cbcc33ce3e24c3",
  measurementId: "G-GBT4L3YJGG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
