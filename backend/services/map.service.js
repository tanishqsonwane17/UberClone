const axios = require("axios");

const getAddressCoordinates = async (address) => {
  try {
    const response = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: address,
        format: "json",
        limit: 1,
      },
      headers: {
        "User-Agent": "YourAppName/1.0" // required for Nominatim
      }
    });

    if (response.data.length === 0) {
      return null;
    }

    const location = response.data[0];
    return {
      lat: location.lat,
      lon: location.lon,
      displayName: location.display_name,
    };
  } catch (error) {
    throw new Error("Error fetching coordinates");
  }
};

module.exports = { getAddressCoordinates };
