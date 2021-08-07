import React from 'react';

function BooksList() {
  return (
    <div>
      <h1>Books List</h1>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default BooksList;
