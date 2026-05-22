import Doctors from './pages/Doctors';
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

   <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/doctors" element={<Doctors />} />

   </Routes>

  </BrowserRouter>
)