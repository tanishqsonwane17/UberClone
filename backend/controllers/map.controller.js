const mapService = require("../services/map.service");

// ✅ Address → Coordinates
const getCoordinates = async (req, res) => {
  try {
    const { address } = req.query;

    if (!address) {
      return res.status(400).json({ success: false, message: "Address is required" });
    }

    const coordinates = await mapService.getAddressCoordinates(address);

    if (!coordinates.success) {
      return res.status(404).json({ success: false, message: coordinates.message });
    }

    res.json({ success: true, data: coordinates });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const getDistanceTime = async (req, res) => {
  try {
    const { origin, destination } = req.query;

    if (!origin || !destination) {
      return res.status(400).json({ success: false, message: "Origin and Destination are required" });
    }

    const result = await mapService.getDistanceTime(origin, destination);

    if (!result.success) {
      return res.status(404).json(result);
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const getAutoSuggestions = async (req, res) => {
  try {
    const { input } = req.query;

    if (!input) {
      return res.status(400).json({ success: false, message: "Query input is required" });
    }

    const suggestions = await mapService.getAutoCompleteSuggestions(input);

    if (!suggestions.success) {
      return res.status(404).json({ success: false, message: suggestions.message });
    }

    res.json(suggestions);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};

module.exports = { getCoordinates, getDistanceTime, getAutoSuggestions };
