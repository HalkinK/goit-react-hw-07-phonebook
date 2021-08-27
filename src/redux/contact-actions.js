// import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

// fetchContact

export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

// addContact

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

// deleteContact

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

// filterContact
export const changeFilter = createAction("contacts/changeFilter");
