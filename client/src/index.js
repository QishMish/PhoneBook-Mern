import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { CookiesProvider } from 'react-cookie';



ReactDOM.render(
  <React.StrictMode>
      <CookiesProvider>
          <App />
      </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
