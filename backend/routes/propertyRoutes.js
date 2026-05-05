const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().populate('seller', 'username email phone');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('seller', 'username email phone');
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add property (SELLER only)
router.post('/', authMiddleware, roleMiddleware('SELLER', 'ADMIN'), async (req, res) => {
  try {
    const { title, description, price, location, bedrooms, bathrooms, squareFeet, propertyType, amenities } = req.body;

    if (!title || !price || !location) {
      return res.status(400).json({ error: 'Title, price, and location are required' });
    }

    const property = new Property({
      title,
      description,
      price,
      location,
      bedrooms,
      bathrooms,
      squareFeet,
      propertyType: propertyType || 'HOUSE',
      seller: req.user.id,
      amenities: amenities || []
    });

    await property.save();
    await property.populate('seller', 'username email phone');
    res.status(201).json({ message: 'Property added successfully', property });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update property (SELLER only)
router.put('/:id', authMiddleware, roleMiddleware('SELLER', 'ADMIN'), async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found' });

    if (property.seller.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    Object.assign(property, req.body);
    property.updatedAt = Date.now();
    await property.save();
    res.json({ message: 'Property updated', property });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete property (SELLER only)
router.delete('/:id', authMiddleware, roleMiddleware('SELLER', 'ADMIN'), async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found' });

    if (property.seller.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await Property.deleteOne({ _id: req.params.id });
    res.json({ message: 'Property deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search properties
router.get('/search/query', async (req, res) => {
  try {
    const { location, minPrice, maxPrice, propertyType } = req.query;
    let query = {};

    if (location) query.location = { $regex: location, $options: 'i' };
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }
    if (propertyType) query.propertyType = propertyType;

    const properties = await Property.find(query).populate('seller', 'username email phone');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
