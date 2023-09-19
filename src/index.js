import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { AddRecipe } from './components/addRecipe';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<AddRecipe />} />
    </Routes>
  </BrowserRouter>
);