const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  bedrooms: Number,
  bathrooms: Number,
  squareFeet: Number,
  totalRooms: Number,
  hasGarden: Boolean,
  gardenSize: String,
  hasBackyard: Boolean,
  backyardSize: String,
  hasParking: Boolean,
  parkingSpaces: Number,
  floorsInBuilding: Number,
  propertyType: {
    type: String,
    enum: ['HOUSE', 'APARTMENT', 'COMMERCIAL', 'LAND'],
    default: 'HOUSE'
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  images: [String],
  thumbnailImage: String,
  amenities: [String],
  features: [String],
  available: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Property', propertySchema);
