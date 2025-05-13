import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import './App.css'
import UserContext, { UserDataContext } from './Context/UserContext'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Userlogin />} />
      <Route path="/signup" element={<Usersignup />} />
      <Route path="/captain-login" element={<Captainlogin />} />
      <Route path="/captain-signup" element={<Captainsignup />} />
    </Routes>
  )
}

const App = () => {
  return (
    <UserContext>
      <AppRoutes />
    </UserContext>
  )
}

export default App
