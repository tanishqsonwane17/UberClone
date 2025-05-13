import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../Context/UserContext' // <-- import context

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()

    const newCaptain = {
      fullName: {
        firstname,
        lastname
      },
      email,
      password
    }
    // clear fields
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg  w-full mb-2 font-medium'>What's our captain's name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base'
              type="text"
              required
              placeholder='Firstname'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base'
              type="text"
              required
              placeholder='Lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className='text-lg mb-2 font-medium'>What's our captain's  email</h3>
          <input
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-base placeholder:text-base'
            type="email"
            required
            placeholder='example@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-lg mb-2 font-medium'>Enter password</h3>
          <input
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-base placeholder:text-base'
            type="password"
            required
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className='bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'
          >
            Signup
          </button>

          <p className='text-center'>
            Already have an account?
            <Link to='/captain-login' className='text-blue-600 ml-1'>Login here</Link>
          </p>
        </form>
      </div>

      <div>
        <p className='text-[10px] pb-2 leading-tight'>
          This site is protected by reCAPTCHA and the
          <span className='underline'> Google privacy policy </span> and
          <span className='underline'> terms of service apply.</span>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
