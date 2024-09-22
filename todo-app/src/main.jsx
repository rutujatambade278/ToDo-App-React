import React from 'react';
import { createRoot } from 'react-dom/client';  // Correct import for React 18+
import App from './App';  // Your root component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const container = document.getElementById('root');  // Get the root element
const root = createRoot(container);  // Create a React root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
