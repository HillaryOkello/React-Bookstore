import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book/book';
import CategoryFilter from '../components/categoryFilter';
import * as actions from '../actions';

import './booklist.css';

const BooksList = (props) => {
  const { books, bookFilter } = props;
  const handleRemoveBook = (event, book) => {
    event.preventDefault();
    props.removeBook(book.id);
  };

  const displayBooks = () => {
    if (bookFilter === 'All' || '') {
      return books.map((book) => (
        <Book key={book.id} book={book} handleChange={handleRemoveBook} />
      ));
    }
    return books
      .filter((book) => book.category === bookFilter)
      .map((book) => (
        <Book key={book.id} book={book} handleChange={handleRemoveBook} />
      ));
  };

  return (
    <div className="bookList">
      <div className="book-filter">
        <CategoryFilter />
      </div>
      <div className="table">
        <div className="table-body">{displayBooks()}</div>
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  bookFilter: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  books: state.bookReducer,
  bookFilter: state.filterReducer,
});

export default connect(mapStateToProps, actions)(BooksList);
