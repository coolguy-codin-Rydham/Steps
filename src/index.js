import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from "./App"
import DateStep from './DateStep';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <DateStep/>
  </React.StrictMode>
);

