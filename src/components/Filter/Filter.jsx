import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css';
import { filterContacts } from 'redux/slice/filterSlice';
import { selectFilter } from 'redux/slice/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    const data = e.currentTarget.value;
    dispatch(filterContacts(data));
  };

  return (
    <input
      id="filter"
      className={css.input}
      type="text"
      value={filter}
      onChange={changeFilter}
    />
  );
};

export default Filter;
