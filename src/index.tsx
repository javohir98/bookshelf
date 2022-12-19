import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './service/apiSlice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
        <Router>
          <App />
        </Router>
    </ApiProvider>
  </React.StrictMode>
);
