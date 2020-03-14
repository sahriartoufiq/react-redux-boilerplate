import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import { Login } from "./views/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { createBrowserHistory } from "history";
import { Header } from "./Header";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Header />
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
