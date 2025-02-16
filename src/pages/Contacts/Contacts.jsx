import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import SearchBox from "../../components/SearchBox/SearchBox";

const Contacts = () => {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
};

export default Contacts;
