import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <>
         <h5 onClick={() =>props.setvehiclePanel(false)}
        className="p-1 text-center w-[93%] absolute top-0 ">
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
      </h5>
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
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='-mt-1 text-gray-600 text-sm'>Kankariya Talab, Ahemdabad</p>
            </div>
            </div>
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

    </>
   )
  
}

export default WaitingForDriver