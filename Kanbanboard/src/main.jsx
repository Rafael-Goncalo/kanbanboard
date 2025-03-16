// This page is the Root page. The Starting point or
// top-level container of the App.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
