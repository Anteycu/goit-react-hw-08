import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = false;
  return (
    <div className={s.appBar}>
      <Navigation />
      <AuthNav />
      {isLoggedIn ?? <UserMenu />}
    </div>
  );
};

export default AppBar;
