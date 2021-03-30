import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAbxAd_Bnf0nQfxOFDe1XLTGYdSeYV8IB4",
    authDomain: "willonation-16f3a.firebaseapp.com",
    databaseURL: "https://willonation-16f3a-default-rtdb.firebaseio.com",  
    projectId: "willonation-16f3a",
    storageBucket: "willonation-16f3a.appspot.com",
    messagingSenderId: "933612109150",
    appId: "1:933612109150:web:70cb758b90d818e2a423cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

