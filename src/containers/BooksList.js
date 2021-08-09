import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const { books } = props;
  const displayBook = books.map((book) => <Book key={book.id} book={book} />);

  return (
    <div>
      <h1>Books List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
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
};

const mapStateToProps = (state) => ({ books: state.bookReducer });

export default connect(mapStateToProps)(BooksList);
