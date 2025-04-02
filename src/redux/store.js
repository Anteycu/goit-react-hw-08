import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import filterReducer from "./filter/slice";
import contactsReducer from "./contacts/slice";

const AppStore = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default AppStore;
