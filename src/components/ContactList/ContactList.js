import React, { useEffect } from "react";
import styles from "../ContactList/ContactItem/ContactItem.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contact-actions";
import * as contactsSelectors from "../../redux/contact-selectors";
import * as contactsOperations from "../../redux/contact-operations";
import * as contactActions from "../../redux/contact-actions";

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) =>
    dispatch(contactActions.deleteContactSuccess(id));

  // const getContactList = (state) => {
  //   const { filter, items } = state.contacts;
  //   const normalizedFilter = filter.toLowerCase();

  //   return items.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className={styles.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
