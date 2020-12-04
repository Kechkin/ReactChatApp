import firebase from "firebase";

// конфигурация firebase

const firebaseConfig = {
  apiKey: "AIzaSyBN0dSnTJsdgD31gtEv9-eTT1nRwdg_k5k",
  authDomain: "mychatapp-98c89.firebaseapp.com",
  databaseURL: "https://mychatapp-98c89.firebaseio.com",
  projectId: "mychatapp-98c89",
  storageBucket: "mychatapp-98c89.appspot.com",
  messagingSenderId: "225936130397",
  appId: "1:225936130397:web:48cac691bc87dfa47468b4",
  measurementId: "G-J4S10GS1FE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
