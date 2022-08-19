import React from 'react';
import { List } from './Contacts.styled';
import { Contact } from '../Contact/Contact';
import PropTypes from 'prop-types';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const Contacts = ({ filter }) => {
  const { data } = useGetContactsQuery();

  return (
    <>
      <List>
        {data &&
          data.map(contact => {
            return (
              contact.name.toLowerCase().includes(filter.toLowerCase()) && (
                <Contact
                  name={contact.name}
                  number={contact.phone}
                  id={contact.id}
                  key={contact.id}
                />
              )
            );
          })}
      </List>
    </>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string,
};
