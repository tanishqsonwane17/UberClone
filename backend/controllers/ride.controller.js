const rideService = require('../services/newRide.service')
const {validationResult}  = require('express-validator')
const mapService  = require('../services/map.service')
module.exports.createRide = async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {userId,pickup,destination,vehicleType} = req.body
   try{
     const ride = await rideService.createRide({user:req.user._id,pickup,destination,vehicleType})
    const pickupCoordinates = await mapService.getAddressCoordinates(pickup)
    console.log(pickup)
    const captainRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.lat, pickupCoordinates.lon, 2)
    console.log(captainRadius)
    console.log(pickupCoordinates)
     

    res.status(200).json({ride})
   }
   catch(err){
    res.status(400).json({message:err.message})
   }
}


module.exports.getFare = async (req, res) => {
  const { pickup, destination, vehicleType } = req.body;

  if (!pickup || !destination || !vehicleType) {
    return res.status(400).json({ success: false, message: "pickup, destination & vehicleType required" });
  }

  try {
    const result = await rideService.calculateFare(pickup, destination, vehicleType);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
