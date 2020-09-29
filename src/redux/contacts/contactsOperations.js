import contactsActions from "./contactsActions";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:2000";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", {
      name,
      number,
    })
    .then((response) => {
      dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then((response) => {
      dispatch(contactsActions.fetchContactsSuccess(response.data));
    })
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

// const toggleSameName = (id) => (dispatch) => {
//   dispatch(contactsActions.toggleSameNameRequest());

//   axios
//     .patch(`http://localhost:2000/contacts/${id}`, {
//       showContactListItem: true,
//     })
//     .then(({ data }) => dispatch(contactsActions.toggleSameNameSuccess(data)))
//     .catch((error) => dispatch(contactsActions.toggleSameNameError(error)));
// };

export default {
  addContact,
  fetchContacts,
  removeContact,
};
