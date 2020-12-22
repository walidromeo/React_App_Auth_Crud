import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD065fGErqUJyWs4qFv_c5aLLxP0oJTu5Y",
    authDomain: "auth-crud-firebase.firebaseapp.com",
    projectId: "auth-crud-firebase",
    storageBucket: "auth-crud-firebase.appspot.com",
    messagingSenderId: "455216707682",
    appId: "1:455216707682:web:ecb5922912bcb2cef3b93b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
