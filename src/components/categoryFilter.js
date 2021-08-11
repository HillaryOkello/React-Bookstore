import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions';
import { categories } from '../containers/BooksForm';

const CategoryFilter = (props) => {
  const { category, changeFilter } = props;
  const filters = [...categories, 'All'];

  const handleFilterChange = (event) => {
    changeFilter(event.target.value);
  };

  return (
    <div>
      <select name="categories" value={category} onChange={handleFilterChange}>
        {filters.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, action)(CategoryFilter);
