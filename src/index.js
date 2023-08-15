import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import "./Css/commponent/button.css";
import "./Css/commponent/alert.css";
import "./Css/commponent/loaging.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Auth/Auth.css"

import MenuContext from './Context/MenuContext';
import WindowContext from './Context/WindowContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindowContext>
    <MenuContext>
   <Router>
   <App />
   </Router>
   </MenuContext>
   </WindowContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
