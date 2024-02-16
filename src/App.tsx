import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sobre-nos' element={<AboutPage />} />
      <Route path='/contacto' element={<ContactPage />} />
    </Routes>
  )
}

export default App