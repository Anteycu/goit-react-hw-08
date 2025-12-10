// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
// import { useEffect } from "react";

const Contacts = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);
  const btn = document.querySelector("button[name='fetcher']");
  btn.addEventListener("click", (e) => {
    if (e.target.name === "fetcher") {
      dispatch(fetchContacts());
    }
  });

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactsList />
      <button name="fetcher" type="button">
        Fetch Contacts
      </button>
    </div>
  );
};

export default Contacts;
