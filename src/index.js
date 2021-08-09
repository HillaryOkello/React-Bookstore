import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

const initialState = {
  bookReducer: [
    {
      id: Math.random(),
      title: 'Clash of Titans',
      category: 'Action',
    },
    {
      id: Math.random(),
      title: 'The cat in the hat',
      category: 'Kids',
    },
    {
      id: Math.random(),
      title: 'Dune',
      category: 'Sci-Fi',
    },
  ],
};

ReactDOM.render(
  <Provider store={createStore(rootReducer, initialState)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
