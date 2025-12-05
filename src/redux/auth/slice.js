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
    loginFulfilled: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    registerFulfilled: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    refreshPending: (state) => {
      state.isRefreshing = true;
    },
    refreshSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    refreshRejected: (state) => {
      state.isRefreshing = false;
    },
  },
});

export const {
  loginFulfilled,
  registerFulfilled,
  logoutSuccess,
  refreshPending,
  refreshSuccess,
  refreshRejected,
} = authSlice.actions;

export default authSlice.reducer;
