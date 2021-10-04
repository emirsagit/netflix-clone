import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./Global-styles";
import { initializeApp } from "firebase/app";
import { FirebaseContext } from "./context/firebase";
import { seedDatabase } from "./seed";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVMCF7tkSB50rrux_5DtOdy55yUsIED3o",
  authDomain: "netflix-ebde8.firebaseapp.com",
  projectId: "netflix-ebde8",
  storageBucket: "netflix-ebde8.appspot.com",
  messagingSenderId: "918360249331",
  appId: "1:918360249331:web:b034f206a23b50b2b6b886",
  databaseURL: "https://netflix-ebde8.firebaseio.com",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const fireStore = getFirestore(firebase);

// seedDatabase(fireStore);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: firebase, fireStore: fireStore }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
