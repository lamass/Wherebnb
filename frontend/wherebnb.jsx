import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// test imports
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});

window.signup = signup;
window.login = login;
window.logout = logout;

// $.ajax({
//   email: 'calvin@gmail.com',
//   first_name: 'Calvin',
//   last_name: 'Jee',
//   password: 'password',
//   language: 'English',
//   country: 'United States',
// })


// update state to include session slice
