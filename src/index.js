import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CurrencyLogin from './Component/CurrencyLogin';


ReactDOM.render(
  <BrowserRouter>
    <App />
  
  </BrowserRouter>,
  document.getElementById('root')
);

