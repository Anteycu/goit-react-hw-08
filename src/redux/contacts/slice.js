import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  patchContact,
  postContact,
  removeContact,
} from "./operations";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(patchContact.fulfilled, (state, action) => {
        state.items = state.items.map((contact) => {
          const { id, name, number } = action.payload;
          if (contact.id !== id) {
            return contact;
          }
          return {
            ...contact,
            name,
            number,
          };
        });
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contacts) => contacts.id !== action.payload
        );
      });
  },
});

export default contactsSlice.reducer;
