import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProviderYear from "./Context/useYear.jsx"
import ContextProviderMonth from "./Context/useMonth.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProviderYear>
      <ContextProviderMonth>
    <App />
      </ContextProviderMonth>
    </ContextProviderYear>
    </BrowserRouter>
  </React.StrictMode>
)
