import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import './index.css';
=======
>>>>>>> Express-API-request-pSQL-queries
import App from './App';

import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

<<<<<<< HEAD
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import App from './App';

import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

=======
>>>>>>> Express-API-request-pSQL-queries

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware()
));


ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById('root'));
<<<<<<< HEAD
>>>>>>> 6577169cf5b844f4bc814f11b5c5301a8a928bf4
=======
>>>>>>> Express-API-request-pSQL-queries
