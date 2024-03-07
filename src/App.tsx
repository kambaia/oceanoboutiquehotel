import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import SingleService from './pages/Single-Service'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
AOS.init();

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sobre-nos' element={<AboutPage />} />
      <Route path='/contacto' element={<ContactPage />} />
      <Route path='/service/:pageCategory' element={<SingleService />} />
    </Routes>
  )
}

export default App;

