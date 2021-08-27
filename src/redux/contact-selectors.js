import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.getError;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// export const getFilteredContacts = (state) => {
//   const { filter, items } = state.contacts;
//   const normalizedFilter = filter.toLowerCase();

//   return items.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
