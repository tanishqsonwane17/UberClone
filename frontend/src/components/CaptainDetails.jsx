import React, { useContext } from 'react'
import {CaptainDataContext} from '../Context/CaptainContext'
const CaptainDetails = () => {
  const {captain} = useContext(CaptainDataContext)
  return (
    <>
       <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
             <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1618306842557-a2515acf2112?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
             <h4 className='text-lg font-medium capitalize'>{captain.fullname?.firstname + " " + captain.fullname.lastname} </h4>
             </div>
               <div>
              <h5 className='text-xl font-semibold'>₹295.2</h5>
              <p className='text-sm text-gray-600 font-medium'>Earned</p>
         </div>
       </div>
    <div className='flex mt-8 p-3 bg-gray-100 rounded-xl justify-center gap-5 items-start' >
     <div className='text-center'>
         <i className="text-3xl text-gray-700 mb-2 font-extralight  ri-history-line"></i>
            <h5 className='text-lg font-medium text-gray-800'>10:02</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center'>
              <i className="text-3xl text-gray-700 mb-2 font-extralight  ri-speed-up-line"></i>
              <h5 className='text-lg font-medium text-gray-800'>10:02</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl text-gray-700 mb-2 font-extralight  ri-booklet-line"></i>
              <h5 className='text-lg font-medium text-gray-800'>10:02</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
           </div>
    </>
  )
}

export default CaptainDetails