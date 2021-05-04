import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};


const firebase = Firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
