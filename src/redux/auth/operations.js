import {
  signup,
  signin,
  signout,
  setAuthToken,
  clearAuthToken,
} from "../../services/contacts-api";
import { loginFulfilled, logoutSuccess, registerFulfilled } from "./slice";

export const register = (credentials) => async (dispatch) => {
  try {
    const res = await signup(credentials);
    setAuthToken();
    dispatch(registerFulfilled(res.data));
  } catch (err) {
    dispatch(console.log(err));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await signin(credentials);
    setAuthToken();
    dispatch(loginFulfilled(res.data));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signout();
    clearAuthToken();
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(console.log(err));
  }
};
