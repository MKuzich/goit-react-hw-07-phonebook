import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
    change(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { add, remove, change } = contactsSlice.actions;

export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleAddContact = value => dispatch(add(value));
  const handleRemoveContact = value => dispatch(remove(value));
  const filter = useSelector(getFilter);
  const filterChange = value => dispatch(change(value));

  return {
    contacts,
    add: handleAddContact,
    remove: handleRemoveContact,
    filter,
    change: filterChange,
  };
};

export const contactsReducer = contactsSlice.reducer;
