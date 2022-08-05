import { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'components/SearchForm/SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const query = inputValue.trim();

    if (query === '') {
      alert('Query can not be empty!');
      return;
    }

    onSubmit(query.toLowerCase());
    setInputValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        autoComplete="off"
        className={css.InputIn}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
