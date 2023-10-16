import { useDispatch } from 'react-redux';
import css from './contactItem.module.css';
import { deleteThunk } from 'redux/slice/operations';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteBtnHandler = () => {
    dispatch(deleteThunk(contact.id));
  };

  return (
    <li className={css.listItem}>
      <p className={css.listItemP}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.listItemBtn} onClick={deleteBtnHandler}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
