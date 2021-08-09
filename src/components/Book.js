import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <div>
      <p>{ book }</p>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.string.isRequired,
};

export default Book;
