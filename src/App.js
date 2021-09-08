import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "./App.css";
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">You are on login</Route>
        <Route path="/signup">You are on register</Route>
        <Route path="/browse">You are browsing</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
