import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Anton Chigur', number: '227-91-26' },
    { id: 'id-2', name: 'Patrick Bateman', number: '645-17-79' },
    { id: 'id-3', name: 'Tony Montana', number: '443-89-12' },
    { id: 'id-4', name: 'Raul Duke', number: '459-12-56' },
  ],
};

const persistConfig = {
  key: 'UserContacts',
  storage,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const persisedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.contacts.contacts;
