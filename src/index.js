import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';

import {
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/video" element={<App />} />
 </Routes>
 <Footer/>

 

 </BrowserRouter>
);
