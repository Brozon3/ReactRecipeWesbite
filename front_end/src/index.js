import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <>
    <App />
    <footer className="container w-50">
      <p>Designed by: Pat Broders</p>
    </footer>
    </>
);