const axios = require("axios");

async function getAddressCoordinates(address) {
  try {
    const response = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: address,
        format: "json",
        limit: 1
      },
      headers: {
        "User-Agent": "MyApp/1.0 (your-email@example.com)" // required for Nominatim
      }
    });

    if (!response.data || response.data.length === 0) {
      return {
        success: false,
        message: "Address not found"
      };
    }

    const place = response.data[0];
    return {
      success: true,
      lat: place.lat,
      lon: place.lon
    };
  } catch (error) {
    return {
      success: false,
      message: "Internal Server Error",
      error: error.message
    };
  }
}

module.exports = { getAddressCoordinates };
