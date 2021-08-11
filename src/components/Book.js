import PropTypes from 'prop-types';
import React from 'react';

const Book = (props) => {
  const { book, removeBook } = props;
  const handleRemoveBook = () => removeBook(book.id);
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={handleRemoveBook} className="btn btn-primary">Remove Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
