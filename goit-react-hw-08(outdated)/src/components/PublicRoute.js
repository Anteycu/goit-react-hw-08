import React from "react";
import { Route, Redirect } from "react-router-dom";
import withAuth from "./hoc/withAuth";

function PublicRoute({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) {
  return (
    <Route
      {...routeProps}
      render={(props) => {
        return isAuthenticated && restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
}

export default withAuth(PublicRoute);
