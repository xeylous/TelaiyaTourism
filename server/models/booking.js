const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    places: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Booking', bookingSchema);
