import React from "react";
import { NavLink } from "react-router-dom";
import withAuth from "./hoc/withAuth";
import "./Navigation.css";

const styles = {
  activeLink: {
    color: "blueviolet",
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink activeStyle={styles.activeLink} className={"links"} to="/" exact>
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        activeStyle={styles.activeLink}
        className={"links"}
        to="/contacts"
        exact
      >
        Tasks
      </NavLink>
    )}
  </nav>
);

export default withAuth(Navigation);
