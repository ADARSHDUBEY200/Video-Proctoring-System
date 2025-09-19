import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import InterviewPage from './pages/InterviewPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<LandingPage/>} />
    <Route path = "/interview" element = {<InterviewPage/>} />
  </Routes>
  </BrowserRouter>

)
