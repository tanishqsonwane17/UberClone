import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isOnline, setIsOnline] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [currentRide, setCurrentRide] = useState(null);
    const [earnings, setEarnings] = useState(0);

    const updateCaptainLocation = (location) => {
        setCurrentLocation(location);
    };

    const toggleOnlineStatus = () => {
        setIsOnline(!isOnline);
    };

    const acceptRide = (ride) => {
        setCurrentRide(ride);
    };

    const completeRide = (amount) => {
        setEarnings(prevEarnings => prevEarnings + amount);
        setCurrentRide(null);
    };

    const value = {
        captain,
        setCaptain,
        isOnline,
        toggleOnlineStatus,
        currentLocation,
        updateCaptainLocation,
        currentRide,
        acceptRide,
        completeRide,
        earnings
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;