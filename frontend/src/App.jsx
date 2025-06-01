import React  from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Home from './pages/Home'
import './App.css'
import UserContext, { UserDataContext } from './Context/UserContext'
import { UserProtectedWrapper } from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'
import { CaptainProtectedWrapper } from './pages/CaptainProtectedWrapper'
import CaptainRiding from './pages/CaptainRiding'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={ 
        <UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>
      } />
      <Route path="/login" element={<Userlogin />} />
      <Route path="/riding" element={<Riding/>} />
      <Route path="/signup" element={<Usersignup />} />
      <Route path="/captain-login" element={<Captainlogin />} />
      <Route path="/captain-signup" element={<Captainsignup />} />
      <Route path="/captain-riding" element={<CaptainRiding />} />
      <Route path="/captain-home" element={<CaptainProtectedWrapper>
        <CaptainHome />
      </CaptainProtectedWrapper>} />

      <Route path="/user/logout" element={
        <UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>
      } />
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
