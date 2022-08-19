import { Contacts } from 'components/Contacts/Contacts';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Filter } from 'components/Filter/Filter';
import { Header, SecondHeader, Section } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');
  const filterChange = value => {
    setFilter(value);
  };
  return (
    <>
      <GlobalStyle />
      <Section>
        <Header>Phonebook</Header>
        <ContactAddForm />
        <SecondHeader>Contacts</SecondHeader>
        <Filter filterChange={filterChange} />
        <Contacts filter={filter} />
      </Section>
    </>
  );
};
