const rideService = require('../services/newRide.service')
const {validationResult}  = require('express-validator')

module.exports.createRide = async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {userId,pickup,destination,vehicleType} = req.body
   try{
     const ride = await rideService.createRide({user:req.user._id,pickup,destination,vehicleType})
    res.status(200).json({ride})
   }
   catch(err){
    res.status(400).json({message:err.message})
   }
}