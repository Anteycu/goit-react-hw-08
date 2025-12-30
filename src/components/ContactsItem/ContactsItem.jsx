import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/operations";

const ContactsItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button type="button" onClick={() => dispatch(removeContact(id))}>
        X
      </button>
    </div>
  );
};
export default ContactsItem;
