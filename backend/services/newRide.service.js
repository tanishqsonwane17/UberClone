const rideModl = require('../models/ride.model')
const userModel = require('../models/user.model')
const mapService = require('./map.service')
const crypto = require('crypto')
async function getFlare(pickup, destination, vehicleType) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  // ✅ Safety check before accessing values
  if (!distanceTime || distanceTime.status !== "OK" ||
      !distanceTime.distance?.value || !distanceTime.duration?.value) {
    throw new Error("Unable to fetch distance and duration");
  }

  const fare = calculateFare(distanceTime.distance.value, distanceTime.duration.value, vehicleType);

  function calculateFare(distance, duration, vehicleType) {
  const baseFare = 40;
  const ratePerKm = { car: 8, auto: 6, moto: 5 }; // 🚀 alag rates
  const ratePerMin = { car: 0.5, auto: 0.4, moto: 0.3 };

  const distanceFare = (distance / 1000) * ratePerKm[vehicleType];
  const durationFare = (duration / 60) * ratePerMin[vehicleType];

  let totalFare = baseFare + distanceFare + durationFare;

  return parseFloat(totalFare.toFixed(2));
}


  return fare;
}
module.exports.getFlare = getFlare;



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

