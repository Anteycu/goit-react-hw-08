const filteredContacts = (contacts, searchValue) => {
  return contacts.filter(({ name }) => {
    if (!name) {
      return contacts;
    }
    return name.toLowerCase().includes(searchValue.toLowerCase());
  });
};

export default filteredContacts;
