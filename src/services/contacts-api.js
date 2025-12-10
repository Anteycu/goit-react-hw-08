import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = apiUrl;

export const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

// Users-api
export const signup = (user) => {
  return axios.post("/users/signup", user);
};

export const signin = (user) => {
  return axios.post("/users/login", user);
};

export const signout = () => {
  return axios.post("/users/logout");
};

export const refresh = () => {
  return axios.get("/users/me");
};

// Contacts-api (using tasks backend)
export const getContacts = () => {
  return axios.get("/tasks");
};

// export const getContact = (id) => {
//   return axios.get(`/tasks/${id}`);
// };

export const addContact = (contact) => {
  return axios.post("/tasks", contact);
};

// export const updateContact = (contact, id) => {
//   return axios.patch(`/notes/${id}`, contact);
// };

export const deleteContact = (id) => {
  return axios.delete(`/tasks/${id}`);
};
