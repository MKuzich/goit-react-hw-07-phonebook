import { useState } from 'react';
import { Form, Button, Label, Input } from './ContactAddForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

export const ContactAddForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (
      data.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      return Notify.warning(`${name} is already in contacts`);
    }
    addContact({ name: name, phone: number });
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Something went wrong!');
    }
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
