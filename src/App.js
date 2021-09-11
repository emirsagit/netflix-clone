import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>You are on login</Route>
        <Route path={ROUTES.SIGN_OUT}>You are on register</Route>
        <Route path={ROUTES.BROWSE}>You are browsing</Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
