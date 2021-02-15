import firebase from 'firebase';
// using the firebase as database.
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCcZCETOvNEdhZMJTOMDPUlsXxReVJxntA",
    authDomain: "lab-app-4313b.firebaseapp.com",
    projectId: "lab-app-4313b",
    storageBucket: "lab-app-4313b.appspot.com",
    messagingSenderId: "1035661563574",
    appId: "1:1035661563574:web:f4b1231f67c81bbc143817"
});

const db= firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};