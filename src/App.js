import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import { Login } from "./views/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <ProtectedRoute exact path="/">
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/about">
          <About />
        </ProtectedRoute>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
