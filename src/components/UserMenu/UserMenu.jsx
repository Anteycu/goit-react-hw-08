import { useState } from "react";

const UserMenu = () => {
  const user = useState((state) => state.auth.user);
  return (
    <div>
      <p>Welcome, {`${user.name} | ${user.email}`}</p>
      <button type="button">LogOut</button>
    </div>
  );
};

export default UserMenu;
