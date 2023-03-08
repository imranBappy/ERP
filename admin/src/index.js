import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import axios from 'axios'
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';
import jwt_decode from 'jwt-decode'


axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

const root = ReactDOM.createRoot(document.getElementById('root'));
const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);

if (searchParams.has('token')) {
  localStorage.setItem('token', searchParams.get('token'));
}
let token = localStorage.getItem('token');


if (!token) {
  store.dispatch({
    type: 'SET_AUTH',
    payload: {
      isAuthintication: false,
      isLoading: false,
      data: null,
      token: token,
    }
  });

} else {
  const decode = jwt_decode(token);

  store.dispatch({
    type: 'SET_AUTH',
    payload: {
      isAuthintication: true,
      isLoading: true,
      data: decode.data,
      token: token,
    }
  })
  axios.get(`/auth?id=${decode.data.id}`, {
    headers: {
      authorization: token
    }
  }).then((res) => {
    console.log(44, res.data);
    if (res.data.error) {
      localStorage.removeItem('token')
      store.dispatch({
        type: 'SET_AUTH',
        payload: {
          isAuthintication: false,
          isLoading: false,
          data: decode,
          token: token,
        }
      })
    } else {
      store.dispatch({
        type: 'SET_AUTH',
        payload: {
          isAuthintication: true,
          isLoading: false,
          data: res.data.data,
          token: token,
        }
      })
    }
  }).catch((error) => {
    store.dispatch({
      type: 'SET_AUTH',
      payload: {
        isAuthintication: false,
        isLoading: false,
        data: null,
        token: token,
      }
    })
  })

}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
