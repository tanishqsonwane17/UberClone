const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
    },
    pickup:{
        type: String,
        required: true
    },
    fare:{
        type: Number,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['pending', 'ongoing', 'completed','cancelled'],
        default: 'pending'
    },
    duration:{
        type: Number,
    },
    distance:{
        type: Number

    },
    paymentId:{
        type: String
    },
    orderId:{
        type: String
    },
    signature:{
        type: String
    },
    otp:{
        type: String,
        select: false,
    }


})

module.exports = mongoose.model('ride',rideSchema)