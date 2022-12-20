import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js";
script.async = true;
script.crossorigin =true;
document.body.appendChild(script);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
