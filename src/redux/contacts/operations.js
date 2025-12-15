import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from "../../services/contacts-api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await getContacts();
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const postContact = createAsyncThunk(
  "contacts/postContact",
  async (contact, thunkAPI) => {
    try {
      const res = await addContact(contact);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const patchContact = createAsyncThunk(
  "contacts/patchContact",
  async ({ contact, id }, thunkAPI) => {
    try {
      const res = await updateContact(contact, id);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const delContact = createAsyncThunk(
  "contacts/delContact",
  async (id, thunkAPI) => {
    try {
      const res = await deleteContact(id);
      console.log(res);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
