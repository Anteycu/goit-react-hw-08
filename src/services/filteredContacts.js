const filteredContacts = (contacts, searchValue) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export default filteredContacts;
