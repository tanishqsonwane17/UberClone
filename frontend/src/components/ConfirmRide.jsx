import React from 'react';

const ConfirmRide = (props) => {
  const { pickup, destination, vehicleType, fare } = props; // ye props bhejna hoga parent se

  return (
    <>
      <h5
        onClick={() => props.setconfimRidePanel(false)}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 mt-10">Confirm your Ride</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
  className="h-30"
  src={
    vehicleType === "car"
      ? "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1732205766/assets/cf/a0f75d-4412-4491-bb81-0114c4b9f2fc/original/Comfort.png"
      : vehicleType === "moto"
      ? "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
      : "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
  }
  alt=""
/>


        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1 border-gray-400">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{pickup}</h3>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-1 border-gray-400">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{destination}</h3>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹ {fare}</h3>
              <p className="-mt-1 text-gray-600 text-sm">Cash</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            props.setvehicleFound(true);
            props.setconfimRidePanel(false);
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default ConfirmRide;
