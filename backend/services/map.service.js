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


async function getDistanceTime(origin, destination) {
  try {
    const originCoords = await getAddressCoordinates(origin);
    const destCoords = await getAddressCoordinates(destination);

    if (!originCoords.success || !destCoords.success) {
      return { success: false, message: "Invalid origin or destination" };
    }

    const url = `http://router.project-osrm.org/route/v1/driving/${originCoords.lon},${originCoords.lat};${destCoords.lon},${destCoords.lat}?overview=false`;

    const response = await axios.get(url);

    if (!response.data.routes || response.data.routes.length === 0) {
      return { success: false, message: "No route found" };
    }

    const route = response.data.routes[0];

    return {
      status: "OK",  // ✅ added status like Google
      distance: {
        text: (route.distance / 1000).toFixed(2) + " km", // readable
        value: route.distance // meters
      },
      duration: {
        text: (route.duration / 60).toFixed(2) + " mins", // readable
        value: route.duration // seconds
      }
    };
  } catch (error) {
    return {
      success: false,
      status: "ERROR",
      message: "Error fetching distance & time",
      error: error.message
    };
  }
}

module.exports = { getAddressCoordinates, getDistanceTime };


