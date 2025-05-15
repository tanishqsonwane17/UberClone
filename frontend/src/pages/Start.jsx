import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
   <>
   <div className='h-screen bg-center pt-8 bg-cover bg-no-repeat w-full bg-[url(https://plus.unsplash.com/premium_photo-1736517550995-44ad360b5738?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex justify-between flex-col'> 
    <img className='w-16 ml-8' src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[30px] font-bold '>Get Started wit Uber</h2>
            <Link to={'/login'} className=' flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
   </div>
   </>
  )
}

export default Start