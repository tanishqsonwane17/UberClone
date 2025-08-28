import React from 'react';

const LookingForDriver = (props) => {
  const { pickup, destination, selectedVehicle, fare } = props;

  return (
    <>
      <h5 
        onClick={() => props.setvehicleFound(false)}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 mt-10">Looking for a Driver</h3>

      <div className='flex gap-2 justify-between flex-col items-center '>
        {/* Vehicle image */}
        <img 
          className='h-20' 
          src={selectedVehicle?.img} 
          alt={selectedVehicle?.name} 
        />

        <div className='w-full mt-5'>
          {/* Pickup */}
          <div className='flex items-center gap-5 p-3 border-b-1 border-gray-400'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>{pickup}</h3>
            </div>
          </div>

          {/* Destination */}
          <div className='flex items-center gap-5 p-3 border-b-1 border-gray-400'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>{destination}</h3>
            </div>
          </div>

          {/* Fare */}
         {/* Fare */}
<div className='flex items-center gap-5 p-3'>
  <i className="ri-currency-line"></i>
  <div>
    <h3 className='text-lg font-medium'>
      ₹ {fare[selectedVehicle?.name]}
    </h3>
    <p className='-mt-1 text-gray-600 text-sm'>Cash</p>
  </div>
</div>

        </div>
      </div>
    </>
  )
}

export default LookingForDriver;
