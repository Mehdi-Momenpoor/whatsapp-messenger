import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCjrL_0z4CTb8rCXmivDycXYOBKGUg0hnc",
  authDomain: "whats-app-701ca.firebaseapp.com",
  projectId: "whats-app-701ca",
  storageBucket: "whats-app-701ca.appspot.com",
  messagingSenderId: "604545761017",
  appId: "1:604545761017:web:97a329ca5932639d8e6c28",
  measurementId: "G-3R6DEN04DX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export {auth,provider};
export default db;