import React from 'react';
import ReactDOM from 'react-dom/client';
import Globalstyles from './Globalstyles';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Globalstyles />
    <App />
  </React.StrictMode>
);


