import React from 'react';

const VehiclePanel = (props) => {
  return (
    <div className="">
      <h5
        onClick={() =>props.setvehiclePanel(false)}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 mt-10">Choose a vehicle</h3>

      {/* UberGo */}
      <div onClick={()=>{
        props.setconfimRidePanel(true);
      }} className="active:border-2 mb-2 rounded-xl flex w-full p-3 items-center justify-between">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1732205766/assets/cf/a0f75d-4412-4491-bb81-0114c4b9f2fc/original/Comfort.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo <span><i className="ri-user-3-fill"></i> 4</span>
          </h4>
          <h5 className="font-medium text-ms">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>

      {/* Moto */}
      <div onClick={()=>{
        props.setconfimRidePanel(true);
      }} className="active:border-2 mb-2 rounded-xl flex w-full p-3 items-center justify-between">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto <span><i className="ri-user-3-fill"></i> 1</span>
          </h4>
          <h5 className="font-medium text-ms">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable, motorcycle rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹65.70</h2>
      </div>

      {/* UberAuto */}
      <div onClick={()=>{
        props.setconfimRidePanel(true);
      }} className="active:border-2 mb-2 rounded-xl flex w-full p-3 items-center justify-between">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto <span><i className="ri-user-3-fill"></i> 3</span>
          </h4>
          <h5 className="font-medium text-ms">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable, auto rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹118.68</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
