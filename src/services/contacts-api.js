import axios from "axios";
const apiToken = import.meta.env.VITE_API_TOKEN;
const apiUrl = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = apiUrl;

const contacts = axios.create({
  baseURL: apiUrl,
  headers: { Authorization: `Bearer ${apiToken}` },
});

// not for all post and need for 1 patch
// axios.defaults.headers.post["Content-Type"] = "application/json";

export const register = (user) => {
  axios.post("/auth", user);
};

// for my own backend in future
// export const login = (user) => {
//   axios.post("/users/login", user);
// };

// export const logout = () => {
//   axios.post("/users/logout", {
//     header: { Authorization: `Bearer ${apiToken}` },
//   });
// };

// export const refresh = () => {
//   axios.get("/users/current", {
//     header: { Authorization: `Bearer ${apiToken}` },
//   });
// };

export const getContacts = () => {
  contacts.get("/notes");
};

export const getContact = (id) => {
  contacts.get(`/notes/${id}`);
};

export const addContact = (contact) => {
  contacts.post("/notes", contact);
};

export const updateContact = (contact, id) => {
  contacts.patch(`/notes/${id}`, contact);
};

export const deleteContact = (id) => {
  contacts.delete(`/notes/${id}`);
};
