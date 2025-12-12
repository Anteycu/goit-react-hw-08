import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from "../../services/contacts-api";
import {
  fulfilledAddContact,
  fulfilledDeleteContact,
  fulfilledGetContacts,
  fulfilledUpdateContact,
} from "./slice";

export const fetchContacts = () => async (dispatch) => {
  try {
    const res = await getContacts();
    dispatch(fulfilledGetContacts(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const postContact = (contact) => async (dispatch) => {
  try {
    const res = await addContact(contact);
    dispatch(fulfilledAddContact(res.data));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const patchContact = (contact, id) => async (dispatch) => {
  try {
    const res = await updateContact(contact, id);
    dispatch(fulfilledUpdateContact(res.data));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const delContact = (id) => async (dispatch) => {
  try {
    const res = await deleteContact(id);
    console.log(res);
    dispatch(fulfilledDeleteContact(id));
  } catch (err) {
    console.error(err);
  }
};
