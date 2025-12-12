import { addContact, getContacts } from "../../services/contacts-api";
import { fulfilledAddContact, fulfilledGetContacts } from "./slice";

export const fetchContacts = () => async (dispatch) => {
  try {
    const res = await getContacts();
    dispatch(fulfilledGetContacts(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const postContact = (contacts) => async (dispatch) => {
  try {
    await addContact(contacts);
    dispatch(fulfilledAddContact());
  } catch (err) {
    console.error(err);
  }
};
