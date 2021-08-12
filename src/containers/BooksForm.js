import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
class BooksForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    if (event.target.name === 'book-title') {
      this.setState({ title: event.target.value });
    }

    if (event.target.name === 'categories') {
      this.setState({ category: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const id = Math.random();
    const newBook = { id, title, category };
    createBook(newBook);
    this.setState({ title: '', category: '' });
  };

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="book-title">
            Title
            <input
              type="text"
              id="book-title"
              className="form-control"
              name="book-title"
              value={title}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <select
            name="categories"
            value={category}
            onChange={this.handleChange}
            className="btn btn-secondary dropdown-toggle"
          >
            <option value="">Please choose an option</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, actions)(BooksForm);
