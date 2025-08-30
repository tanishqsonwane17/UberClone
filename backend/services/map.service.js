const axios = require("axios");
const captainModel = require("../models/captain.model");
function formatDuration(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  let parts = [];
  if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);
  if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} min${minutes > 1 ? "s" : ""}`);

  return parts.length > 0 ? parts.join(" ") : "0 min";
}
async function getAddressCoordinates(address) {
  try {
    const response = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: { q: address, format: "json", limit: 1 },
      headers: { "User-Agent": "MyApp/1.0 (your-email@example.com)" }
    });

    if (!response.data || response.data.length === 0) {
      return { success: false, message: "Address not found" };
    }

    const place = response.data[0];
    return { success: true, lat: place.lat, lon: place.lon, displayName: place.display_name };
  } catch (error) {
    return { success: false, message: "Internal Server Error", error: error.message };
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

    if (!response.data?.routes || response.data.routes.length === 0) {
      return { success: false, message: "No route found" };
    }

    const route = response.data.routes[0];

    // ✅ Safety check before accessing values
    if (!route.distance || !route.duration) {
      return { success: false, message: "Invalid route data" };
    }

    return {
      status: "OK",
      distance: { text: (route.distance / 1000).toFixed(2) + " km", value: route.distance },
      duration: { text: formatDuration(route.duration), value: route.duration }
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
async function getAutoCompleteSuggestions(input) {
  try {
    const response = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: input,
        format: "json",
        addressdetails: 1,
        limit: 5,
      },
      headers: { "User-Agent": "MyApp/1.0 (your-email@example.com)" }
    });

    if (!response.data || response.data.length === 0) {
      return { success: false, message: "No suggestions found" };
    }

    const suggestions = response.data.map((place) => place.display_name);

    return { success: true, suggestions };
  } catch (error) {
    return { success: false, message: "Error fetching suggestions", error: error.message };
  }
}

async function getCaptainsInTheRadius (ltd,lng,radius){
location:{
  $geoWithin: {
    $centerSphere: [[lng, ltd], radius / 3963.2]
  }
}
};

module.exports = { getDistanceTime, getAddressCoordinates, getAutoCompleteSuggestions, getCaptainsInTheRadius };
