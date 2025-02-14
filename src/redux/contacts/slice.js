import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add");
export const deleteContact = createAction("contacts/delete");
// export const updateContact = createAction("contacts/update");
export const toggleCompleted = createAction("contacts/toggleCompleted");

const initialState = {
  contacts: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/add": {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }

    case "contacts/delete": {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }

    case "contacts/toggleCompleted": {
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id !== action.payload) {
            return contact;
          }
          return {
            ...contact,
            completed: !contact.completed,
          };
        }),
      };
    }

    default:
      return state;
  }
};

export default contactsReducer;
