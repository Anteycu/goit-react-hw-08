import { getContacts } from "../../services/contacts-api";
import { fulfilledGetContacts } from "./slice";

export const fetchContacts = () => async (dispatch) => {
  try {
    const res = await getContacts();
    dispatch(fulfilledGetContacts(res.data));
  } catch (err) {
    dispatch(console.log(err));
  }
};
