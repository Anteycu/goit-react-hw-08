import React from "react";
import { NavLink } from "react-router-dom";
import style from "./authNav.module.css";

const styles = {
  activeLink: {
    color: "blueviolet",
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      className={style.links}
      activeStyle={styles.activeLink}
      to="/register"
      exact
    >
      Register
    </NavLink>
    <NavLink
      className={style.links}
      activeStyle={styles.activeLink}
      to="/login"
      exact
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
