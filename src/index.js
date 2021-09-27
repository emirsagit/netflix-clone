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
  apiKey: "AIzaSyCpt6bvzs_is8QAyE7fh8z6OJvz4V5FdGA",
  authDomain: "netflix-clone-f2cdf.firebaseapp.com",
  projectId: "netflix-clone-f2cdf",
  storageBucket: "netflix-clone-f2cdf.appspot.com",
  messagingSenderId: "608680810231",
  appId: "1:608680810231:web:8d2a9de7d4be650de0e5f2",
  databaseURL: "https://netflix-clone-f2cdf.firebaseio.com",
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
