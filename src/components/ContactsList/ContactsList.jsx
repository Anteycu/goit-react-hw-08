import { useSelector } from "react-redux";
import ContactsItem from "../ContactsItem/ContactsItem";
import s from "./ContactsList.module.css";
import filteredContacts from "../../services/filteredContacts";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.search);
  return (
    <ul className={s.contacts}>
      {filteredContacts(contacts, filter).map(({ id, name, number }) => (
        <li key={id}>
          <ContactsItem name={name} phone={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
