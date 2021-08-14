import React from 'react';
import './App.css';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';
import Nav from './nav/navbar';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <BooksList />
        <BookForm />
      </div>
    </div>
  );
}

export default App;
