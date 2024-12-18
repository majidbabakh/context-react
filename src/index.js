import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provide } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
  <Provide>
    <App />
  </Provide>
);
