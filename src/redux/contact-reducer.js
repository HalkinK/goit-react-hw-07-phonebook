import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as contactActions from "./contact-actions";

const items = createReducer([], {
  [contactActions.fetchContactSuccess]: (_, { payload }) => payload,
  [contactActions.addContactSuccess]: (state, { payload }) => {
    const matching = state.find(
      (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
    );
    if (matching) {
      alert(`${matching.name} is already in contacts.`);
      return;
    }
    return [...state, payload];
  },
  [contactActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [contactActions.changeFilter]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [contactActions.fetchContactRequest]: () => true,
  [contactActions.fetchContactSuccess]: () => false,
  [contactActions.fetchContactError]: () => false,
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.deleteContactRequest]: () => true,
  [contactActions.deleteContactSuccess]: () => false,
  [contactActions.deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  isLoading,
});
