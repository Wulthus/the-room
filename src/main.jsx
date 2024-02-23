import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { SlideshowProvider } from './context/slideshowContext.jsx'
import { LightLevelProvider } from './context/lightLevelContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SlideshowProvider>
      <LightLevelProvider>
        <App />
      </LightLevelProvider>
    </SlideshowProvider>
  </React.StrictMode>
)
