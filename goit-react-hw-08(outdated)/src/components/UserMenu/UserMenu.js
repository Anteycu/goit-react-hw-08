import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./userMenu.module.css";

const UserMenu = ({ name, email, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}>Hello, {name}</span>
    <span className={styles.name}> {email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  email: authSelectors.getUserEmail(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
