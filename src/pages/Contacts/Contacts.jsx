// import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import SearchBox from "../../components/SearchBox/SearchBox";
// import { useEffect } from "react";

const Contacts = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
};

export default Contacts;
