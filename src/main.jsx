import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import '@styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Link to='/'>  
        <h1>Inicio</h1>
      </Link>
      <Link to='about'>  
        <h1>sobre nosotos</h1>
      </Link>
      <Link to='contact'>  
        <h1>contactanos</h1>
      </Link>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
 
)
