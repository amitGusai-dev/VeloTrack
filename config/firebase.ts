import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArZxY4aH-NidBaXWvCJ3j5hT9t8VzxYPw",
  authDomain: "autotrack-e5adc.firebaseapp.com",
  projectId: "autotrack-e5adc",
  storageBucket: "autotrack-e5adc.firebasestorage.app",
  messagingSenderId: "814026979313",
  appId: "1:814026979313:web:01a58bbaa807b08dcab650",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
