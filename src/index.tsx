import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './shared/styles/vendors/index.css';
import {Provider} from 'react-redux';
import {store} from './domain/app/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
);

reportWebVitals();
