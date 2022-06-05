import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuki2Qmy_PPdgBXtpzN4Kzs1-sVvonjDc",
  authDomain: "twitter-clone-7f6fc.firebaseapp.com",
  projectId: "twitter-clone-7f6fc",
  storageBucket: "twitter-clone-7f6fc.appspot.com",
  messagingSenderId: "503277825753",
  appId: "1:503277825753:web:f597fb601750e66879d8c8",
  measurementId: "G-3WM82QK518",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
