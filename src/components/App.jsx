import Layout from "./Layout";
import "./App.css";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Contacts from "../pages/Contacts/Contacts";
import NotFound from "../pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "./Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && <Modal />}
      </div>
    </Layout>
  );
}

export default App;
