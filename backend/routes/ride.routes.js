const express  = require()
const router = express.Router();
const {body} = require('express-validator')
router.post('/create',
  body('userId').isString().isLength({ min: 24, max: 24 }).withMessage('userId is not valid'),
  body('pickup').isString().isLength({ min: 3 }).withMessage('pickup is not valid'),
  body('destination').isString().isLength({ min: 3 }).withMessage('destination is not valid'),

)

module.exports = router