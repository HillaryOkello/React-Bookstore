import React from 'react';
import './App.css';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
