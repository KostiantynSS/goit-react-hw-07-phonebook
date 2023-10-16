import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/slice/selectors';
import { addThunk } from 'redux/slice/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = form;
    const data = {
      name: name.value,
      number: number.value,
    };

    const isExist = contacts.find(
      ({ name }) => data.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(addThunk(data));
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
