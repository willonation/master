import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFfb2kZQxByaSMSECLg59hWyoXkw8ikjI",
    authDomain: "willonation-2dc57.firebaseapp.com",
    databaseURL: "https://ecommerce-225c8.firebaseio.com",
    projectId: "willonation-2dc57",
    storageBucket: "willonation-2dc57.appspot.com",
    messagingSenderId: "1091361119992",
    appId: "1:1091361119992:web:e88c456edf0cd41e25650d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

