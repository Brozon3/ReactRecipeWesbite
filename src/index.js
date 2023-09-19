import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Add } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);