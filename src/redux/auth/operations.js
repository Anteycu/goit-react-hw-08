import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signup,
  signin,
  signout,
  setAuthToken,
  clearAuthToken,
  current,
} from "../../services/contacts-api";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await signup(credentials);
      setAuthToken(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await signin(credentials);
      setAuthToken(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signout();
    clearAuthToken();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  try {
    const res = await current();
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
