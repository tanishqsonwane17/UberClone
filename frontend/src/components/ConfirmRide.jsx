import React from 'react'

const ConfirmRide = (props) => {
  return (
  <>
        <h5 onClick={() =>props.setvehiclePanel(false)}
        className="p-1 text-center w-[93%] absolute top-0 ">
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 mt-10">Confirm your Ride</h3>
      <div className='flex gap-2 justify-between flex-col items-center '>
        <img className='h-30' src={props.selectedVehicle?.img} alt="" />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-1 border-gray-400'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p  className='-mt-1 text-gray-600 text-sm'>Kankariya Talab, Ahemdabad</p>
            </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-1 border-gray-400'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p  className='-mt-1 text-gray-600 text-sm'>Kankariya Talab, Ahemdabad</p>
            </div>

            </div>
            <div className='flex items-center gap-5 p-3 '>
          <i className="ri-currency-line"></i>
            <div>
               <h3 className='text-lg font-medium'>₹ {props.selectedVehicle?.fare}</h3>
               <p className='-mt-1 text-gray-600 text-sm'>Cash</p>
            </div>

            </div>
        </div>
        <button onClick={()=>{
          props.setvehicleFound(true);
          props.setconfimRidePanel(false);
        }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
      </div>
  </>
  )
}

export default ConfirmRide