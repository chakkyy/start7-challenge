import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { WelcomeScreen } from "../components/WelcomeScreen/WelcomeScreen";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage?.getItem("accessToken");

    if (auth) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth"
          component={LoginScreen}
          isAuthenticated={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/"
          component={WelcomeScreen}
          isAuthenticated={isLoggedIn}
        />
      </Switch>
    </Router>
  );
};
