import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import * as actions from '../actions';

function BooksList(props) {
  const { books } = props;
  const handleRemoveBook = (event, book) => {
    event.preventDefault();
    props.removeBook(book.id);
  };
  const displayBook = books.map(
    (book) => <Book key={book.id} book={book} handleChange={handleRemoveBook} />,
  );

  return (
    <div>
      <h1>Books List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {displayBook}
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ books: state.bookReducer });

export default connect(mapStateToProps, actions)(BooksList);
