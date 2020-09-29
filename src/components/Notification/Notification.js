import React from "react";
import PropTypes from "prop-types";
import styles from "./notification.module.css";

const Notification = ({ name }) => {
  return (
    <div className={styles.Container}>
      <p className={styles.Message}>{`${name} is already in contacts`}</p>
    </div>
  );
};

Notification.propTypes = {
  name: PropTypes.string,
};

export default Notification;
