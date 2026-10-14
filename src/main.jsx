import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} catch (error) {
  // If React cannot even start, the static page written in index.html stays
  // on screen (name, contact details, reload button), so it is never blank.
  console.error('[portfolio] could not start the app', error)
  document.documentElement.classList.add('boot-failed')
}
