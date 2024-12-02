import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Email validation
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

export const Contact = mongoose.model('Contact', contactSchema);


