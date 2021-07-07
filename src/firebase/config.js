import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAV6s1l-L_2iitYKTfmQSjAqpEZEDZ58xs",
  authDomain: "chat-app-8cb34.firebaseapp.com",
  projectId: "chat-app-8cb34",
  storageBucket: "chat-app-8cb34.appspot.com",
  messagingSenderId: "756277755331",
  appId: "1:756277755331:web:93d490c6c01e1e84039176",
  measurementId: "G-CVVLGCLF40",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
auth.useEmulator("http://localhost:9099");
if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
