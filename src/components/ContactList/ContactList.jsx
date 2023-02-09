import { useDispatch, useSelector } from 'react-redux';
import { contactsSlice, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filerSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const { removeContact } = contactsSlice.actions;
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const contactDelHandler = id => {
    dispatch(removeContact(id));
  };

  const renderContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <ul className={css.list}>
      {renderContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            <span>{name}:</span> {number}
          </p>
          <button className={css.button} onClick={() => contactDelHandler(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;



  