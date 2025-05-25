import React from 'react'

const LocationSearchPanel = (props) => {
  const locations = [
    "24B,Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "12A, Opp. Nukkad Tea Point, Skyline Tower Lane, Indore",
    "Flat 5C, Above Sharma General Store, CodeHub Road, Pune",
    "1st Floor, Near College Gate, API Developers' Lane, Chennai",
    "Unit 204, Next to Bootcamp Lounge, Git Colony, Hyderabad"
  ];

  return (
    <>
      {locations.map((elem, index) => (
        <div key={index}
          onClick={()=>{
            props.setvehiclePanel(true)
            props.setpanelOpen(false)
          }}
          className="flex p-3 border-2 border-gray-100 active:border-black 
                     rounded-lg items-center justify-start my-2 gap-4"
        >
          <h2
            className="p-4 h-12 flex items-center justify-center 
                       w-12 bg-[#eee] rounded-full"
          >
            <i className="ri-map-pin-2-fill"></i>
          </h2>
          <h4 className="font-medium text-[14px] text-gray-700">
            {elem}
          </h4>
        </div>
      ))}
    </>
  );
};

export default LocationSearchPanel;
