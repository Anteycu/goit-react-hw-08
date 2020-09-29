import React from "react";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 28,
  },
};
const HomeView = () => (
  <div style={styles.container}>
    <h1>Home page</h1>
    <p>Welcome to our great Phonebook</p>
    <span>Some styles incoming soon...</span>
  </div>
);

export default HomeView;
