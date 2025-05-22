import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()  
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        padding:24,
        // opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        rotate: 180,
        duration: 0.5,
        
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        // opacity:0,
      })
      gsap.to(panelCloseRef.current, {
        rotate: 0,
        duration: 0.5
      })
    }
  }, [panelOpen])

  return (
    <>
      <div className='h-screen relative'>
        <img
          className='w-16 absolute left-5 top-5'
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt='Uber Logo'
        />
        <div className='h-screen w-full'>
          <img
            className='h-full w-full object-cover'
            src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
            alt=''
          />
        </div>
        <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
          <div className='h-[30%] p-6 bg-white relative'>
            <h5 ref={panelCloseRef} onClick={()=>setpanelOpen(!panelOpen)} className='absolute top-5 right-5 text-3xl cursor-pointer'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className='text-2xl font-semibold'>Find trip</h4>
            <form onSubmit={submitHandler}>
              <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-b-full'></div>
              <input
                value={pickup}
                onClick={() => setpanelOpen(true)}
                onChange={(e) => setpickup(e.target.value)}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full'
                type='text'
                placeholder='Add a pickup location'
              />
              <input
                value={destination}
                onClick={() => setpanelOpen(true)}
                onChange={(e) => setDestination(e.target.value)}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full'
                type='text'
                placeholder='Enter your destination'
              />
            </form>
          </div>
          <div ref={panelRef} className=' bg-white h-0 transition-all duration-500'>
           <LocationSearchPanel/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
