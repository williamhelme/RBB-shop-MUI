import firebase from "firebase";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import registerServiceWorker from "./registerServiceWorker";

var config = {
  apiKey: "AIzaSyA8urnEKGzPrIfmWhpdTOwC12jv4bgzLLs",
  authDomain: "bexs-bakes.firebaseapp.com",
  databaseURL: "https://bexs-bakes.firebaseio.com",
  projectId: "bexs-bakes",
  storageBucket: "bexs-bakes.appspot.com",
  messagingSenderId: "317468318530"
};

registerServiceWorker();
export const fb = firebase.initializeApp(config);

// firebase utils
const app = firebase.app();
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// auth.signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.error(`${errorCode}: ${errorMessage}`);
// });

const provider = new firebase.auth.GoogleAuthProvider();

export const AuthProvider = provider;

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const recipesCollection = db.collection("recipes");

//if they reference the file then return firebase.
export default fb;

// functions we want to use.
export { db, app, auth, currentUser, recipesCollection };
