import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import SingleService from './pages/Single-Service'
import { Route, Routes } from 'react-router-dom'
import './index.css'



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

export default App