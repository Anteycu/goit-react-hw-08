import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import routes from "../routes";
import { BrowserRouter, Switch } from "react-router-dom";
import { authOperations } from "../redux/auth";
import SearchBar from "./SearchBar";
import "./styles.css";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <SearchBar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map((route) => {
                return route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                );
              })}
            </Switch>
          </Suspense>
        </>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
