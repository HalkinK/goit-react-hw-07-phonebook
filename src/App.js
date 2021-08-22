import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

import * as contactSelectors from "./redux/contact-selectors";

function App() {
  const isLoading = useSelector((state) => contactSelectors.getLoading(state));
  const error = useSelector((state) => contactSelectors.getError(state));
  // const filter = useSelector(state => contactSelectors.getFilteredContacts(state))

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      {error && <h2>Something went wrong</h2>}
      {isLoading && <h2>Loading...</h2>}
      <ContactList />
    </div>
  );
}

export default App;
