import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { email, token } = action.payload;
      state.user = { ...state.user, email };
      state.token = token;
      state.isLoggedIn = true;
    },
    register: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    refresh: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      // state.isRefreshing = false;
    },
  },
});

export const { login, register, logout, refresh } = authSlice.actions;

export default authSlice.reducer;
