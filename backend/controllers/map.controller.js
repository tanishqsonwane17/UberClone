const mapService = require("../services/map.service");

const getCoordinates = async (req, res) => {
  try {
    const { address } = req.query;

    if (!address) {
      return res.status(400).json({ success: false, message: "Address is required" });
    }

    const coordinates = await mapService.getAddressCoordinates(address);

    if (!coordinates) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }

    res.json({ success: true, data: coordinates });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

module.exports = { getCoordinates };
