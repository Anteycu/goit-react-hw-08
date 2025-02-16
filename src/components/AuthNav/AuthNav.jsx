import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/signin">SignIn</NavLink>
        </li>
        <li>
          <NavLink to="/login">LogIn</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
