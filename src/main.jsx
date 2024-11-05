import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppClassComponent from './AppClassComponent.jsx'
import UserFetcher from './UserFetcher.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <br/> */}
    {/* <br/> */}
    {/* <br/> */}
    {/* <AppClassComponent /> */}
    <UserFetcher />
  </StrictMode>,
)
