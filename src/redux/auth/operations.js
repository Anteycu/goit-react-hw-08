import { signup, signin, signout } from "../../services/contacts-api";
import { loginFulfilled, logoutSuccess, registerFulfilled } from "./slice";

export const register = (credentials) => async (dispatch) => {
  try {
    const res = await signup(credentials);
    dispatch(registerFulfilled(res.data));
  } catch (err) {
    dispatch(console.log(err));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await signin(credentials);
    dispatch(loginFulfilled(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signout();
    dispatch(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
};
