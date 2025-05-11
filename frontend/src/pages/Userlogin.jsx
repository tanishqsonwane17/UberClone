import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Userlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()
   setUserData({
      email: email,
      password: password
    })
  setEmail('');
  setPassword('')
  }
  return (
    <>
       <div className='p-7 flex flex-col justify-between h-screen '>
        <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
<form action="" onSubmit={(e)=>{
    submitHandler(e)
}}>
    <h3 className='text-xl mb-2 font-medium '>What's your email</h3>
    <input value={email} 
    onChange={(e) => setEmail(e.target.value)}
    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base ' 
    type="email" required
    placeholder='email@example.com'/>

    <h3 className='text-xl mb-2 font-medium '>Enter password</h3>
    <input value={password}
     onChange={(e) => setPassword(e.target.value)}
     className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base '
    type="password" 
    required 
    placeholder='password'/>
    <button className='bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '>Login</button>
 <p className='text-center '>New here?    
    <Link to={'/signup'} className='text-blue-600'> Create new Account</Link></p>
</form>
        </div>
        <div>
            <Link to={'/captain-login'} 
             className='flex items-center mb-5 justify-center  bg-gray-600 text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain
             </Link>
        </div>
    </div>
    </>
  )
}

export default Userlogin