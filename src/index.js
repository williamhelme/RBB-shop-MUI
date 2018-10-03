import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyA8urnEKGzPrIfmWhpdTOwC12jv4bgzLLs",
  authDomain: "bexs-bakes.firebaseapp.com",
  databaseURL: "https://bexs-bakes.firebaseio.com",
  projectId: "bexs-bakes",
  storageBucket: "bexs-bakes.appspot.com",
  messagingSenderId: "317468318530"
};

registerServiceWorker();
const fb = firebase.initializeApp(config);

fb.auth()
  .signInAnonymously()
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(`${errorCode}: ${errorMessage}`);
  });

ReactDOM.render(<App firebase={fb} />, document.getElementById("root"));
