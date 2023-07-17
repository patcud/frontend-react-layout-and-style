import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/main.scss'
import 'antd/dist/reset.css'// Import Ant Design
import './i18n.tsx' // Import i18n.ts

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
