const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/Auth.middleware')

// ✅ Fare check endpoint
router.post(
  '/get-fare',
  body('pickup').notEmpty().withMessage('Pickup is required'),
  body('destination').notEmpty().withMessage('Destination is required'),
  body('vehicleType').notEmpty().withMessage('Vehicle type is required'),
  rideController.getFare
);

// ✅ Create ride endpoint
router.post(
  '/create-ride',
  body('pickup').notEmpty().withMessage('Pickup is required'),
  body('destination').notEmpty().withMessage('Destination is required'),
  body('vehicleType').notEmpty().withMessage('Vehicle type is required'),
  authMiddleware.authUser,
  rideController.createRide
);

module.exports = router;
