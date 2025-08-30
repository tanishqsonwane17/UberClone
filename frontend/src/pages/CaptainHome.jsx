import React, { useRef, useState, useEffect, useContext } from "react";
import { useSocket } from "../Context/SocketContext";
import { CaptainDataContext } from "../Context/CaptainContext";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const RidePopupPanelRef = useRef(null);
  const [RidePopupPanel, setRidePopupPanel] = useState(true);
  const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ConfirmRidepopupPanelRef = useRef(null);

  const socket = useSocket();
  const { captainData } = useContext(CaptainDataContext);

const { captain } = useContext(CaptainDataContext);

useEffect(() => {
  if (!socket || !captain?._id) return;

  socket.emit("join", {
    userType: "captain",
    userId: captain._id,
  });

  if ("geolocation" in navigator) {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        console.log("📍 Captain Location:", latitude, longitude);

        socket.emit("update-location-captain", {
          userId: captain._id,
          location: { ltd: latitude, lng: longitude },
        });
      },
      (error) => {
        console.error("❌ Error getting location:", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
      console.log("🛑 Stopped watching location");
    };
  } else {
    console.log("⚠️ Geolocation not supported by this browser");
  }
}, [socket, captain?._id]);


  useGSAP(() => {
    if (RidePopupPanel) {
      gsap.to(RidePopupPanelRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(RidePopupPanelRef.current, { transform: "translateY(100%)" });
    }
  }, [RidePopupPanel]);

  // GSAP animation ConfirmRidePopup
  useGSAP(() => {
    if (ConfirmRidePopupPanel) {
      gsap.to(ConfirmRidepopupPanelRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(ConfirmRidepopupPanelRef.current, { transform: "translateY(100%)" });
    }
  }, [ConfirmRidePopupPanel]);

  return (
    <div className="h-screen">
      {/* Top Navbar */}
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber"
        />
        <Link
          to="/captain-login"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full text-lg font-medium"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Background GIF */}
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Captain driving"
        />
      </div>

      {/* Captain Details */}
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      {/* Ride Popup */}
      <div
        ref={RidePopupPanelRef}
        className="fixed w-full z-10 bg-white bottom-0 px-3 py-10 pt-12"
      >
        <RidePopup
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>

      {/* Confirm Ride Popup */}
      <div
        ref={ConfirmRidepopupPanelRef}
        className="fixed w-full h-screen z-10 bg-white bottom-0 px-3 py-10 pt-12"
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
