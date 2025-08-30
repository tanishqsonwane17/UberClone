import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationSearchPanel = ({
  setpanelOpen,
  setvehiclePanel,
  pickup,
  destination,
  setpickup,
  setDestination,
  activeField
}) => {
  const [locations, setLocations] = useState([]);

  const fetchSuggestions = async (query) => {
    if (!query || query.length < 3) {
      setLocations([]);
      return;
    }
    try {
      const res = await axios.get(`http://localhost:3000/maps/get-suggetions?input=${query}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  // input ke basis pe suggestions fetch karna
  useEffect(() => {
    if (activeField === "pickup") {
      fetchSuggestions(pickup);
    } else if (activeField === "destination") {
      fetchSuggestions(destination);
    }
  }, [pickup, destination, activeField]);

  return (
    <>
      {locations.map((elem, index) => (
        <div
          key={index}
          onClick={() => {
            if (activeField === "pickup") {
              setpickup(elem);
            } else if (activeField === "destination") {
              setDestination(elem);
            }
            // setpanelOpen(false);
            // setvehiclePanel(true);
          }}
          className="flex p-3 border-2 border-gray-100 active:border-black rounded-lg items-center justify-start my-2 gap-4"
        >
          <h2 className="p-4 h-12 flex items-center justify-center w-12 bg-[#eee] rounded-full">
            <i className="ri-map-pin-2-fill"></i>
          </h2>
          <h4 className="font-medium text-[14px] text-gray-700">{elem}</h4>
        </div>
      ))}
    </>
  );
};

export default LocationSearchPanel;
