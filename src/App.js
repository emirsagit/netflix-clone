import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/use-auth-listener";
import { UserContext } from "./context/user";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.REGISTER}>
          <Signup />
        </Route>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <UserContext.Provider value={{ user: user }}>
            <Browse />
          </UserContext.Provider>
        </ProtectedRoute>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
