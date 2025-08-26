const axios = require("axios");

// ✅ Address → Coordinates
async function getAddressCoordinates(address) {
  try {
    const response = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: address,
        format: "json",
        limit: 1
      },
      headers: {
        "User-Agent": "MyApp/1.0 (your-email@example.com)"
      }
    });

    if (!response.data || response.data.length === 0) {
      return { success: false, message: "Address not found" };
    }

    const place = response.data[0];
    return {
      success: true,
      lat: place.lat,
      lon: place.lon,
      displayName: place.display_name
    };
  } catch (error) {
    return {
      success: false,
      message: "Internal Server Error",
      error: error.message
    };
  }
}

// ✅ Distance & Time between 2 addresses
async function getDistanceTime(origin, destination) {
  try {
    // Get coordinates of origin and destination
    const originCoords = await getAddressCoordinates(origin);
    const destCoords = await getAddressCoordinates(destination);

    if (!originCoords.success || !destCoords.success) {
      return { success: false, message: "Invalid origin or destination" };
    }

    // OSRM Routing API (car mode)
    const url = `http://router.project-osrm.org/route/v1/driving/${originCoords.lon},${originCoords.lat};${destCoords.lon},${destCoords.lat}?overview=false`;

    const response = await axios.get(url);

    if (!response.data.routes || response.data.routes.length === 0) {
      return { success: false, message: "No route found" };
    }

    const route = response.data.routes[0];

    return {
      success: true,
      origin: originCoords.displayName,
      destination: destCoords.displayName,
      distance: (route.distance / 1000).toFixed(2) + " km", // meters → km
      duration: (route.duration / 60).toFixed(2) + " mins" // seconds → mins
    };
  } catch (error) {
    return {
      success: false,
      message: "Error fetching distance & time",
      error: error.message
    };
  }
}

module.exports = { getAddressCoordinates, getDistanceTime };
