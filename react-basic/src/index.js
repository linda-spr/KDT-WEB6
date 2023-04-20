import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Clock from './Clock';
//import { Clock2 } from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 1000);
