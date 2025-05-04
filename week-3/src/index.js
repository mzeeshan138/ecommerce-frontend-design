import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.css';
import './responsive.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'font-awesome/css/font-awesome.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './assets/fonts/fonts.css';

// import './utils/script.js'; //error

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <div className="container">{/* <yy /> */}</div>
    </HelmetProvider>
  </React.StrictMode>
);
