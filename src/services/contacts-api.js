import axios from "axios";

axios.defaults.baseURL("https://connections-api.goit.global");

const contacts = axios.create({
  baseURL: "https://connections-api.goit.global",
  headers: { Authorization: `Bearer ${"AUTH_TOKEN"}` },
});

// not for all post and need for 1 patch
// axios.defaults.headers.post["Content-Type"] = "application/json";

export const register = (user) => {
  axios.post("/users/signup", user);
};

// {
//     "name": "Adrian Cross",
//     "email": "across@mail.com",
//     "password": "examplepwd12345"
//   }

export const login = (user) => {
  axios.post("/users/login", user);
};

// {
//     "email": "string",
//     "password": "string"
//   }

export const logout = () => {
  axios.post("/users/logout", {
    header: { Authorization: `Bearer ${"AUTH_TOKEN"}` },
  });
};

export const refresh = () => {
  axios.get("/users/current", {
    header: { Authorization: `Bearer ${"AUTH_TOKEN"}` },
  });
};

export const getContacts = () => {
  contacts.get("/contacts");
};

export const addContact = (contact) => {
  contacts.get("contact", contact);
};

export const updateContact = (contact, id) => {
  contacts.patch(`/contacts/${id}`, contact);
};

export const deleteContact = (id) => {
  contacts.delete(`/contacts/${id}`);
};
