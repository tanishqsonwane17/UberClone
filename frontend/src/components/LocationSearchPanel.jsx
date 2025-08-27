import React, { useState } from "react";
import axios from "axios";

const LocationSearchPanel = (props) => {
  const [locations, setLocations] = useState([]);

  const fetchSuggestions = async (query) => {
    if (query.length < 3) return; // backend validation ke liye
    try {
      const res = await axios.get(
        `http://localhost:3000/maps/get-suggetions?input=${query}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT token
          },
        }
      );
      if (res.data.success) {
        setLocations(res.data.suggestions);
      }
    } catch (err) {
      console.log("Error fetching suggestions:", err.response?.data || err);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search location..."
        className="border p-2 rounded w-full"
        onChange={(e) => fetchSuggestions(e.target.value)}
      />

      {locations.map((elem, index) => (
        <div
          key={index}
          onClick={() => {
            props.setvehiclePanel(true);
            props.setpanelOpen(false);
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
          <h4 className="font-medium text-[14px] text-gray-700">{elem}</h4>
        </div>
      ))}
    </>
  );
};

export default LocationSearchPanel;
