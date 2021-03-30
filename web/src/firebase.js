import * as firebase from "firebase";

// Your web app's Firebase configuration
<<<<<<< HEAD
var firebaseConfig = {
    apiKey: "AIzaSyAbxAd_Bnf0nQfxOFDe1XLTGYdSeYV8IB4",
    authDomain: "willonation-16f3a.firebaseapp.com",
    databaseURL: "https://willonation-16f3a-default-rtdb.firebaseio.com",  
    projectId: "willonation-16f3a",
    storageBucket: "willonation-16f3a.appspot.com",
    messagingSenderId: "933612109150",
    appId: "1:933612109150:web:70cb758b90d818e2a423cf"
=======
const firebaseConfig = {
  apiKey: "AIzaSyDniyhK46KyCVzN4PkypDIKjMEZLfTUx64",
  authDomain: "ecommerce-225c8.firebaseapp.com",
  databaseURL: "https://ecommerce-225c8.firebaseio.com",
  projectId: "ecommerce-225c8",
  storageBucket: "ecommerce-225c8.appspot.com",
  messagingSenderId: "593746841585",
  appId: "1:593746841585:web:f0090fc9296a27f7c67e50",
>>>>>>> 580339065a5ad75b755b0e97904622cdd6442177
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
