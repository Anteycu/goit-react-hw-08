import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContacts = (state, action) => [...state, action.payload];

const removeContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContacts,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload.filter,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.addContactRequest]: (state, action) => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
  // [contactsActions.toggleSameNameContactRequest]: () => true,
  // [contactsActions.toggleSameNameContactSuccess]: () => false,
  // [contactsActions.toggleSameNameContactError]: () => false,
});

// const toggleSameName = (state, action) =>
//   state.map((contact) =>
//     contact.text === action.payload.text
//       ? { ...contact, showContactListItem: true }
//       : contact
//   );

export default combineReducers({
  items,
  filter,
  loading,
});
