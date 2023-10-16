import css from './contactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getThunk } from '../../redux/slice/operations';
import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/slice/selectors';
const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectVisibleContacts);
  const { isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(getThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      <ul className={css.list}>
        {items.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;
