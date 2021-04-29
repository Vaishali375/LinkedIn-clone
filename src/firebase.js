import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA5jtGDR06Nd8ScnP7qopSmpKcFdkvEsgI",
  authDomain: "linkedin-clone-c836e.firebaseapp.com",
  projectId: "linkedin-clone-c836e",
  storageBucket: "linkedin-clone-c836e.appspot.com",
  messagingSenderId: "108048347067",
  appId: "1:108048347067:web:70129e163876a3ce2d9e9e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};