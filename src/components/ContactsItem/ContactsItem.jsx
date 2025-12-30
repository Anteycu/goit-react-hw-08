import { delContact } from "../../redux/contacts/operations";

const ContactsItem = ({ name, phone, id }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button type="button" onClick={() => delContact(id)}>
        X
      </button>
    </div>
  );
};
export default ContactsItem;
