import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.css';
import './responsive.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
