import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactsById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, items) => items.find((item) => item.id === contactId)
);

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactsById,
};
