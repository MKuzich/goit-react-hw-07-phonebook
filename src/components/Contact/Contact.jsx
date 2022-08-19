import React from 'react';
import { Button, Item } from './Contact.styled';
import PropTypes from 'prop-types';
import { useRemoveContactMutation } from 'redux/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const [removeContact] = useRemoveContactMutation();

  const handleRemoveContact = e => {
    removeContact(e.target.id);
  };
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={handleRemoveContact} id={id}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
