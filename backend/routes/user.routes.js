const express  = require('express')
const router = express.Router();
const {body} = require('express-validator')
const Usercontroller = require('../controllers/user.controller');


router.post('/register', [
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
], Usercontroller.register);


module.exports = router