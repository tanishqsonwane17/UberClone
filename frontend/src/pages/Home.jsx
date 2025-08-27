import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriverComponent from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setDestination] = useState("");
  const [activeField, setActiveField] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const vehiclePanelRef = useRef(null);
  const confimRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [confimRidePanel, setconfimRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [WaitingForDriver,setWaitingForDriver] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
  };
async function findTrip() {
  setvehiclePanel(true);
  setpanelOpen(false);

  if (!pickup || !destination) {
    alert("Please enter pickup and destination");
    return;
  }

  const vehicleTypes = ["car", "auto", "moto"]; // tino vehicles

  try {
    const fares = await Promise.all(
      vehicleTypes.map(async (type) => {
        const res = await fetch("http://localhost:3000/rides/get-fare", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pickup, destination, vehicleType: type }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Error fetching fare");
        return { type, fare: data.fare };
      })
    );

    console.log("All fares:", fares);
    // ✅ Example: [{type: "car", fare: 123}, {type: "auto", fare: 190}, {type: "moto", fare: 90}]
    alert(`Fares:\nCar: ₹${fares[0].fare}\nAuto: ₹${fares[1].fare}\nMoto: ₹${fares[2].fare}`);
  } catch (err) {
    console.error(err);
    alert("Something went wrong while fetching fares");
  }
}



  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        duration: 0.5,
        padding: 24,
        // opacity: 1
      });
      gsap.to(panelCloseRef.current, {
        rotate: 180,
        duration: 0.5,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 0.5,
        // opacity:0,
      });
      gsap.to(panelCloseRef.current, {
        rotate: 0,
        duration: 0.5,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confimRidePanel) {
      gsap.to(confimRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confimRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confimRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (WaitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [WaitingForDriver]);

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <div
          onClick={() => {
            setvehiclePanel(false);
          }}
          className="h-screen w-full"
        >
          <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
          <div className="h-[30%] p-6 bg-white relative">
            <h5
              ref={panelCloseRef}
              onClick={() => setpanelOpen(!panelOpen)}
              className="absolute top-5 right-5 text-3xl cursor-pointer"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find trip</h4>
            <form onSubmit={submitHandler}>
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-b-full"></div>
              <input
  value={pickup}
  onClick={() => {
    setpanelOpen(true);
    setActiveField("pickup");
  }}
  onChange={(e) => setpickup(e.target.value)}
  className="bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full"
  type="text"
  placeholder="Add a pickup location"
/>

<input
  value={destination}
  onClick={() => {
    setpanelOpen(true);
    setActiveField("destination");
  }}
  onChange={(e) => setDestination(e.target.value)}
  className="bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full"
  type="text"
  placeholder="Enter your destination"
/>

            </form>
            
            <button
            onClick={findTrip}
            className="bg-black text-white px-4 py-2 rounded-lg w-full mt-4">
              Find trip
            </button>
          </div>
          <div ref={panelRef} className=" bg-white h-0 transition-all duration-500">
<LocationSearchPanel 
  setpanelOpen={setpanelOpen} 
  setvehiclePanel={setvehiclePanel}
  pickup={pickup}
  destination={destination}
  setpickup={setpickup}
  setDestination={setDestination}
  activeField={activeField}
/>          </div>
        </div>
        <div ref={vehiclePanelRef} className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-12" >
          <VehiclePanel setconfimRidePanel = {setconfimRidePanel} setvehiclePanel={setvehiclePanel} />
        </div>
        <div ref={confimRidePanelRef} className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12"> 
          <ConfirmRide setconfimRidePanel = {setconfimRidePanel} setvehicleFound = {setvehicleFound}/>
        </div>
        <div ref={vehicleFoundRef} className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12"> 
          <LookingForDriver setvehicleFound = {setvehicleFound}/>
        </div>
        <div ref={WaitingForDriverRef} className="fixed w-full z-10 bg-white bottom-0  px-3 py-6 pt-12"> 
         <WaitingForDriverComponent WaitingForDriver={WaitingForDriver} />       
       </div>
      </div>
    </>
  );
};

export default Home;
