import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJ6mIpD7L7HLI9EjFeQNUiOH7U0c7INcw",
    authDomain: "instagramclone-44ad2.firebaseapp.com",
    projectId: "instagramclone-44ad2",
    storageBucket: "instagramclone-44ad2.appspot.com",
    messagingSenderId: "361009819989",
    appId: "1:361009819989:web:0cf8d0f8bff69576a47fdc"
};


const firebase = Firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
