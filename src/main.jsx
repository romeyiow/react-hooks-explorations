import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppClassComponent from './AppClassComponent.jsx'
import UserFetcher from './UserFetcher.jsx'
import InputChecker from './InputChecker.jsx'
import UserProfile from './UserProfile.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode captures side-effects kaya dalawang beses naco-call */}
    {/* <App /> */}
    {/* <br/> */}
    {/* <br/> */}
    {/* <br/> */}
    {/* <AppClassComponent /> */}
    {/* <UserFetcher /> */}
    {/* <InputChecker /> */}
    <UserProfile />

  </StrictMode>,
)
