const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstName,    // Updated to match the fields from the request
    lastName, 
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType,
}) => {
    if (!firstName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
      fullname: {
        firstname: firstName,   
        lastname: lastName,    
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    });

    return captain;
};
