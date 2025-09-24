const rideModl = require('../models/ride.model')
const userModel = require('../models/user.model')
const mapService = require('./map.service')
const crypto = require('crypto')
async function calculateFare(pickup, destination, vehicleType) {
  const distanceData = await mapService.getDistanceTime(pickup, destination);

  if (!distanceData || distanceData.status !== "OK") {
    throw new Error("Unable to calculate fare");
  }

  const distanceInKm = distanceData.distance.value / 1000;

  let ratePerKm;
  switch (vehicleType) {
    case "car":  ratePerKm = 15; break;
    case "moto": ratePerKm = 7; break;
    case "auto": ratePerKm = 10; break;
    default:     ratePerKm = 12;
  }

  return {
    fare: Math.round(distanceInKm * ratePerKm),
    distance: distanceData.distance.text,
    duration: distanceData.duration.text,
  };
}


async function getOtp(num){
function generateOtp() {
     return crypto.randomInt(100000, 999999).toString();
}
return generateOtp();
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
    otp: await getOtp(6)
  });

  return ride;
};


module.exports = { calculateFare, getOtp };