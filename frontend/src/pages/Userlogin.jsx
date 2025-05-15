import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../Context/UserContext'

const Userlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password }
      )

      if (response.status === 200 || response.status === 201) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    } catch (error) {
      console.error('Login failed:', error)
      alert('Invalid credentials or server error')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img
          className='w-16 mb-10'
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className='text-base mb-2 font-medium'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="email"
            required
            placeholder='email@example.com'
          />

          <h3 className='text-base mb-2 font-medium'>Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            required
            placeholder='password'
          />

          <button
            type="submit"
            className='bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'
          >
            Login
          </button>

          <p className='text-center'>
            New here?
            <Link to='/signup' className='text-blue-600 ml-1'>
              Create new Account
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to='/captain-login'
          className='flex items-center mb-5 justify-center bg-[#10b461] text-white font-semibold rounded px-4 py-2 w-full text-lg'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default Userlogin
