const express = require("express");
const router = express.Router();
const { query } = require("express-validator");
const mapController = require("../controllers/map.controller");
const authMiddleware = require("../middlewares/Auth.middleware");

// ✅ Address → Coordinates
router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getCoordinates   // yaha change kiya
);

// ✅ Distance & Time
router.get(
  "/get-distance-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getDistanceTime
);


router.get('/get-suggetions',

  query("input").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getAutoSuggestions
)

module.exports = router;
