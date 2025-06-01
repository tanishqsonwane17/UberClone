import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <>
    <div className='h-screen'>
      <Link 
       to='/home'
       className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full text-lg font-medium right-2 top-2 '>
        <i className="ri-home-4-line"></i>
      </Link>
     <div className='h-1/2'>
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""
          />

      </div>
       <div className='h-1/2 p-4'>
               <div className='flex items-center justify-between'>
          <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1732205766/assets/cf/a0f75d-4412-4491-bb81-0114c4b9f2fc/original/Comfort.png" alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium '>Bixi</h2>
            <h4 className='text-xl font-semibold -mt-2 -mb-1'>MP22 MN 35 43</h4>
            <p className='text-sm text-gray-600'>Maruti Suzukit Alto</p>
            </div>
         </div>

      <div className='flex gap-2 justify-between flex-col items-center '>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-1 border-gray-400'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='-mt-1 text-gray-600 text-sm'>Kankariya Talab, Ahemdabad</p>
            </div>

            </div>
            <div className='flex items-center gap-5 p-3 '>
          <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹ 193.20</h3>
              <p className='-mt-1 text-gray-600 text-sm'>Cash Cash</p>
            </div>
            </div>
        </div>
      </div>

      <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Proceed to Payment</button>
       </div>
    </div>
    </>
  )
}

export default Riding