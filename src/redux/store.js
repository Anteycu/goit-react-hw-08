import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { filtersReducer } from "./filter/slice";
import { contactsReducer } from "./contacts/slice";

const AppStore = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default AppStore;
