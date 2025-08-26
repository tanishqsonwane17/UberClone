const express  = require('express')
const router = express.Router();
const rideController = require('../controllers/ride.controller')
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/Auth.middleware')
router.post('/create',
    authMiddleware.authUser,
  body('pickup').isString().isLength({ min: 3 }).withMessage('pickup is not valid'),
  body('destination').isString().isLength({ min: 3 }).withMessage('destination is not valid'),
  body('vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('vehicleType is not valid'),
  rideController.createRide
)

module.exports = router