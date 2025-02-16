import Layout from "./Layout";
import "./App.css";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Contacts from "../pages/Contacts/Contacts";
import NotFound from "../pages/NotFound/NotFound";

function App() {
  return (
    <Layout>
      <Home />
      <Registration />
      <Login />
      <Contacts />
      <NotFound />
    </Layout>
  );
}

export default App;
