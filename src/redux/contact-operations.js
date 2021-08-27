import * as contactsActions from "./contact-actions";
// import * as contactsAPI from "../components/contact-api";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3004";
export const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactSuccess(data)))
    .catch((error) =>
      dispatch(contactsActions.fetchContactError(error.message))
    );
};

export const addContact = (data) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post("/contacts", data)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactError(error.message)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch((error) =>
      dispatch(contactsActions.deleteContactError(error.message))
    );
};

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(contactsActions.fetchContactRequest());

//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactError(error));
//   }
// };

// export const addContact = (data) => async (dispatch) => {
//   dispatch(contactsActions.addContactRequest());

//   try {
//     const addContact = await contactsAPI.addContacts(data);
//     dispatch(contactsActions.addContactSuccess(addContact));
//   } catch (error) {
//     dispatch(contactsActions.addContactError(error.message));
//   }
// };

// export const deleteContact = (id) => async (dispatch) => {
//   dispatch(contactsActions.addContactRequest());

//   try {
//     const deleteContact = await contactsAPI.deleteContacts(id);
//     dispatch(contactsActions.deleteContactSuccess(deleteContact));
//   } catch (error) {
//     dispatch(contactsActions.deleteContactError(error.message));
//   }
// };
