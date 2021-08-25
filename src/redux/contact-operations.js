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

export const addContact = (data) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  try {
    const addContact = await contactsAPI.addContacts(data);
    dispatch(contactsActions.addContactSuccess(addContact));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  try {
    const deleteContact = await contactsAPI.deleteContacts(id);
    dispatch(contactsActions.deleteContactSuccess(deleteContact));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};
