const Booking = require('../models/booking');

// controllers/bookingController.js
exports.createBooking = async (req, res) => {
    try {
        const { name, contactNumber, source, destination, places } = req.body;
        // console.log('Request Body:', req.body);
        const newBooking = new Booking({ name, contactNumber, source, destination, places });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        // console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Error creating booking', error });
    }
};


exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};
