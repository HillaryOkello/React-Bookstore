import PropTypes from 'prop-types';
import React from 'react';
// import * as actions from '../actions';

const Book = (props) => {
  const { book, removeBook } = props;
  const handleRemoveBook = () => removeBook(book.id);
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={handleRemoveBook}>Remove Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
