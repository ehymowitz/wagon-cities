// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

// internal modules
import '../assets/stylesheets/application.scss';
import App from './components/app';

// Store
const store = createStore(rootReducer)

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider>
    <App />, document.getElementById('root')
  </Provider>
);



