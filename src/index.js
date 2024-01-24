import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDepB3l2f-YD_mynZh-AA4rzS2X406q30w",
  authDomain: "my-react-blog-fd963.firebaseapp.com",
  projectId: "my-react-blog-fd963",
  storageBucket: "my-react-blog-fd963.appspot.com",
  messagingSenderId: "898956467816",
  appId: "1:898956467816:web:0ee4eb6160fce54bd565dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
