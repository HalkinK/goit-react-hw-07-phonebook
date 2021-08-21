import * as contactsActions from "./contact-actions";
import * as contactsAPI from "../components/contact-api";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactRequest());

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error));
  }
};
