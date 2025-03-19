import ContactsItem from "../ContactsItem/ContactsItem";
import s from "./ContactsList.module.css";

const initialValues = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const ContactsList = () => {
  return (
    <ul className={s.contacts}>
      {initialValues.map(({ id, name, number }) => (
        <li key={id}>
          <ContactsItem name={name} phone={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
