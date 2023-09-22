import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>
      <App />
      <footer className="container w-50">
          <p>Designed by: Pat Broders</p>
      </footer>
  </div>
);