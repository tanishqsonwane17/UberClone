const rideModl = require('../models/ride.model')
const userModel = require('../models/user.model')
const mapService = require('./map.service')

async function getFlare(pickup, destination, vehicleType){
  if(!pickup || !destination){
      throw new Error('pickup and destination are required')
  }
  const distanceTime = await mapService.getDistanceTime(pickup,destination)

  const fare = calculateFare(distanceTime.distance.value, distanceTime.duration.value, vehicleType)

  function calculateFare(distance, duration, vehicleType) {
    const baseFare = 40;
    const ratePerKm = 8;
    const ratePerMin = 0.5;
    const distanceFare = (distance / 1000) * ratePerKm;
    const durationFare = (duration / 60) * ratePerMin;
    let totalFare = baseFare + distanceFare + durationFare;

    if(vehicleType === 'auto'){
        totalFare = totalFare * 1.5;
    }

    return parseFloat(totalFare.toFixed(2)); // ✅ 2 decimal points
}
  return fare;
}

module.exports.createRide = async ({ user, pickup, destination, vehicleType }) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error('all fields are required');
  }
  const fare = await getFlare(pickup, destination, vehicleType);
  console.log("Calculated fare:", fare);
  const ride = await rideModl.create({
    user,
    pickup,
    destination,
    fare,
    vehicleType,
  });

  return ride;
};

