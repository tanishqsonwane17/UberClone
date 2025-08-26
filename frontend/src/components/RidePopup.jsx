import React from 'react'

const RidePopup = (props) => {
  return (
    <>
      <h5
        onClick={() => props.setRidePopupPanel(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 mt-10">New Ride Available!</h3>

      <div className="flex justify-between items-center p-3 bg-yellow-300 rounded-xl mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1618306842557-a2515acf2112?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h2 className="text-lg font-medium">Bixi </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col gap-2 mt-5 w-full">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b border-gray-400">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="-mt-1 text-gray-600 text-sm">Kankariya Talab, Ahmedabad</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b border-gray-400">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="-mt-1 text-gray-600 text-sm">Kankariya Talab, Ahmedabad</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹ 193.20</h3>
              <p className="-mt-1 text-gray-600 text-sm">Cash</p>
            </div>
          </div>
        </div>
           <div className='flex justify-between w-full mt-5'>  

        <button
          onClick={() => {
            props.setRidePopupPanel(false)
          }}
          className="mt-1 bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg"
        >
          Ignore
        </button>
          <button
          onClick={() => {
            // props.setRidePopupPanel(false)
            props.setConfirmRidePopupPanel(true)
          }}
          className=" bg-green-600 text-white font-semibold p-2 px-10 rounded-lg"
        >
          Accept
        </button>


           </div>
      </div>
    </>
  )
}

export default RidePopup
