import { useState, useEffect } from 'react';
import { STORAGE_KEY } from 'constans/localStorageKey';
import { contactsList } from 'constans/contactList';
import { getItem, setItem } from 'utils/localStorage';

import Form from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { Container, TitlePhonebook, TitleContacts } from '../App/App.styled';

export default function App() {
  const [contacts, setContacts] = useState(
    () => getItem(STORAGE_KEY) ?? contactsList
  );

  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }

    setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => setFilter(event.target.value);

  const getFilteredContact = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

  useEffect(() => {
    setItem(STORAGE_KEY, contacts);
  }, [contacts]);

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Form onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContact()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
