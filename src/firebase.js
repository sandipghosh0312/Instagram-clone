import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA0Ya4_PwnG4YYTRGVgLb_KNzaab9cNQEw",
    authDomain: "instagram-clone-react-7d068.firebaseapp.com",
    databaseURL: "https://instagram-clone-react.firebaseio.com",
    projectId: "instagram-clone-react-7d068",
    storageBucket: "instagram-clone-react-7d068.appspot.com",
    messagingSenderId: "263770318433",
    appId: "1:263770318433:web:d160b37fb611c75fcf2c20",
    measurementId: "G-4R1P6413V6"
});
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };