const UserMenu = ({ userName = "John" }) => {
  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button">LogOut</button>
    </div>
  );
};

export default UserMenu;
