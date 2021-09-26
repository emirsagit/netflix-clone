import initializeApp from "firebase/app";
import { createContext } from "react";
export const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCpt6bvzs_is8QAyE7fh8z6OJvz4V5FdGA",
  authDomain: "netflix-clone-f2cdf.firebaseapp.com",
  projectId: "netflix-clone-f2cdf",
  storageBucket: "netflix-clone-f2cdf.appspot.com",
  messagingSenderId: "608680810231",
  appId: "1:608680810231:web:8d2a9de7d4be650de0e5f2",
};

export const firebase = initializeApp(firebaseConfig);
export const auth = firebase.auth();
