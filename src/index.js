import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar.js';
import Register from './components/register.js';
import Login from './components/login.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <p>Changes</p>
      <Navbar/>
      <Routes>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/logout" element={<h1>Logout</h1>}/>
      </Routes>
    </Router>
  
  </div>
  
);


