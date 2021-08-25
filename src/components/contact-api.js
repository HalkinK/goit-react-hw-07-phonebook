import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContacts(newContact) {
  const data = await axios.post("/contacts", newContact);
  return data;
}

export async function deleteContacts(id) {
  const data = await axios.delete(`/contacts/${id}`);
  return data;
}
