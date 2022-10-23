import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyABO77ceRT9AwNrGiyzl2XovC8Za_uIbrA",
    authDomain: "stocky-79b10.firebaseapp.com",
    projectId: "stocky-79b10",
    storageBucket: "stocky-79b10.appspot.com",
    messagingSenderId: "433929107206",
    appId: "1:433929107206:web:ef561cf34e1c59bc539087",
    measurementId: "G-2P062Q7DK0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  
  export default db;