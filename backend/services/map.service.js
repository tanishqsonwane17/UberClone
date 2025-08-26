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
      status: "OK",
      distance: {
        text: (route.distance / 1000).toFixed(2) + " km", // readable
        value: route.distance // meters
      },
      duration: {
        text: formatDuration(route.duration), // ✅ human readable
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
async function getAutoCompleteSuggestions(input) {
  if (!input) throw new Error("Query is required");

  const response = await axios.get("https://nominatim.openstreetmap.org/search", {
    params: {
      q: input,
      format: "json",
      addressdetails: 1,
      limit: 5
    },
    headers: {
      "User-Agent": "MyApp/1.0 (tanishqsonwane@example.com)"
    }
  });

  if (!response.data || response.data.length === 0) {
    return { success: false, message: "No suggestions found" };
  }

  const suggestions = response.data.map((place) => ({
    displayName: place.display_name,
    lat: place.lat,
    lon: place.lon
  }));

  return { success: true, status: "OK", predictions: suggestions };
}

module.exports = {
  getAddressCoordinates,
  getDistanceTime,
  getAutoCompleteSuggestions // ✅ add this
};

module.exports = { getAddressCoordinates, getDistanceTime, getAutoCompleteSuggestions };


