import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.authNav}>
      <NavLink to="/signin" className={s.authNavLink}>
        SignIn
      </NavLink>
      <NavLink to="/login" className={s.authNavLink}>
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
