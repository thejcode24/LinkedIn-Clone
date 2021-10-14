<<<<<<< HEAD
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBRuWAv8dZdLZdp1s9fxZZP1WLEn48oZHo",
    authDomain: "linkedin-clone-9b672.firebaseapp.com",
    projectId: "linkedin-clone-9b672",
    storageBucket: "linkedin-clone-9b672.appspot.com",
    messagingSenderId: "949070254687",
    appId: "1:949070254687:web:4e5759c2761f18c26381ea"
  };
=======
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBRuWAv8dZdLZdp1s9fxZZP1WLEn48oZHo",
  authDomain: "linkedin-clone-9b672.firebaseapp.com",
  projectId: "linkedin-clone-9b672",
  storageBucket: "linkedin-clone-9b672.appspot.com",
  messagingSenderId: "949070254687",
  appId: "1:949070254687:web:4e5759c2761f18c26381ea"
};
>>>>>>> login using redux initiated

// Firebase and firebase database initialization 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
<<<<<<< HEAD


export default firebase;
=======
>>>>>>> login using redux initiated
