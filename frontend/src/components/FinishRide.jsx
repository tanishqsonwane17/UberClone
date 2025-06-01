import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <>
      <div>
        <h5
          onClick={() => props.setFinishRidePanel(false)}
          className="p-1 text-center w-[93%] absolute top-0"
        >
          <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
        </h5>

        <h3 className="text-2xl font-semibold mb-5 mt-10">Finish this ride </h3>

        <div className="flex border-2 border-yellow-500  justify-between items-center p-3 rounded-xl mt-4">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1618306842557-a2515acf2112"
              alt="User"
            />
            <h2 className="text-lg font-medium">Tanishq Sonwane</h2>
          </div>
          <h5 className="text-lg font-semibold">2.2 KM</h5>
        </div>

        <div className="flex flex-col items-center gap-2 mt-5 w-full">
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

          <div className='mt-10 w-full'>
              
              <Link to={'/captain-home'} onClick={() => {
                props.setConfirmRidePopupPanel(true)
                props.setRidePopupPanel(true)
              }} className="w-full text-lg  flex justify-center items-center mt-3 bg-green-600 text-white font-semibold p-3 rounded-lg"  >
                Finish Ride 
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinishRide
