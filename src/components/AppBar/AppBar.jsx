import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  return (
    <div>
      <Navigation />
      <AuthNav />
      {/* or */}
      <UserMenu />
    </div>
  );
};

export default AppBar;
