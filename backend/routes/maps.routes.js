const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator');
const mapController = require('../controllers/map.controller');
const authMiddleware = require('../middlewares/Auth.middleware');
router.get('/get-coordinates',
  query('address').isString().isLength({ min: 3 }),
  authMiddleware.authUser,mapController.getCoordinates
);

module.exports = router;
