import { Redirect, Route } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isLoggedIn ? (
        <Component auth={auth} {...props} />
      ) : (
        <Route path="/"  />
      )
    }
  />
);

export default PrivateRoute;
