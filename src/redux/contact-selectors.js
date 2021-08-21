import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.getFilter;

export const getLoading = (state) => state.contacts.isLoading;

export const getError = (state) => state.contacts.getError;

export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// export const getFilteredContacts = (state) => {
//   const items = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter((item) =>
//     item.name.toLowerCase().includes(normalizedFilter)
//   );
// };
