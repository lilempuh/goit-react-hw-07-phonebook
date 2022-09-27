import React from 'react';
import { Contactelement, Button } from './ContactList.styled';
import { getFilter } from '../redux';
import { useSelector } from 'react-redux';
import { useDeleteContactMutation, useGetContactsQuery } from '../redux';

export default function ContactList() {
  const { data } = useGetContactsQuery();

  const filterSearch = useSelector(getFilter);

  const contactsAPI = data;

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const getfilteredContacts = () => {
    const normalizedFilter = filterSearch.toLowerCase();
    return contactsAPI.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterListContact = getfilteredContacts;
  return (
    <ul>
      {data &&
        filterListContact().map(contact => (
          <Contactelement key={contact.id} contact={contact}>
            {contact.name}:{contact.phone}
            <Button onClick={() => deleteContact(contact.id)}>
              {' '}
              {isDeleting ? 'Deleting..' : 'Delete'}
            </Button>
          </Contactelement>
        ))}
    </ul>
  );
}
