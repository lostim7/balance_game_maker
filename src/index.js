import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Navbar';
import "./style/Home.css"
import "./style/MyFavorite.scss"
import "./style/Look.scss"
import "./style/Play.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
