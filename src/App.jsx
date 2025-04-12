import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Login from './pages/Login.jsx'

const App = () => {
  const userRole = localStorage.getItem('role')
  console.log(userRole);
  

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      {userRole && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App
