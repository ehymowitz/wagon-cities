// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import App from './components/app';

// Store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



