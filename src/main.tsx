
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'
import { AppProvider } from './context/AppProvider'



createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
