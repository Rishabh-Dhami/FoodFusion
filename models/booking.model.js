import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    trim: true,
  },
  bookEmail: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Email validation
  },
  bookPhone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], // Phone number validation
  },
  bookDate: {
    type: Date,
    required: true,
  },
  bookTime: {
    type: String, // Stores time as "HH:mm"
    required: true,
    match: [/^([01]\d|2[0-3]):([0-5]\d)$/, 'Please enter a valid time in HH:mm format'], // Time validation
  },
  bookPeople: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  bookMessage: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

export const Booking = mongoose.model('Booking', bookingSchema);


