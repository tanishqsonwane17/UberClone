import React from "react";

const VehiclePanel = ({
  fares,
  loadingFares,
  setconfimRidePanel,
  setSelectedVehicle,
  setvehiclePanel,
}) => {
  const vehicles = [
    {
      type: "car",
      name: "UberGo",
      capacity: 4,
      eta: "2 mins away",
      desc: "Affordable, compact rides",
      img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1732205766/assets/cf/a0f75d-4412-4491-bb81-0114c4b9f2fc/original/Comfort.png",
    },
    {
      type: "moto",
      name: "Moto",
      capacity: 1,
      eta: "3 mins away",
      desc: "Affordable, motorcycle rides",
      img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
    },
    {
      type: "auto",
      name: "UberAuto",
      capacity: 3,
      eta: "2 mins away",
      desc: "Affordable, auto rides",
      img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
    },
  ];

  return (
    <div>
      <h5
        onClick={() => setvehiclePanel(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 mt-10">Choose a vehicle</h3>

      {vehicles.map((v) => (
        <div
          key={v.type}
         onClick={() => {
  setSelectedVehicle(v);   // <-- pura vehicle object bhej
  setconfimRidePanel(true);
}}

          className="active:border-2 mb-2 rounded-xl flex w-full p-3 items-center justify-between cursor-pointer"
        >
          <img className="h-14" src={v.img} alt={v.name} />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              {v.name} <span><i className="ri-user-3-fill"></i> {v.capacity}</span>
            </h4>
            <h5 className="font-medium text-ms">{v.eta}</h5>
            <p className="font-normal text-xs text-gray-600">{v.desc}</p>
          </div>
          <h2
            className={`text-xl font-semibold ${
              loadingFares ? "bg-gray-300 rounded w-20 h-6 animate-pulse" : ""
            }`}
          >
            {loadingFares ? "" : `₹${fares[v.type]}`}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default VehiclePanel;
