const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

// Get all bookings
router.get('/', authMiddleware, async (req, res) => {
  try {
    let query = {};
    if (req.user.role === 'BUYER') {
      query.buyer = req.user.id;
    } else if (req.user.role === 'SELLER') {
      const properties = await Property.find({ seller: req.user.id }).select('_id');
      query.property = { $in: properties.map(p => p._id) };
    }

    const bookings = await Booking.find(query)
      .populate('property')
      .populate('buyer', 'username email phone');
    
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create booking
router.post('/', authMiddleware, roleMiddleware('BUYER', 'ADMIN'), async (req, res) => {
  try {
    const { propertyId, visitDate, notes } = req.body;

    if (!propertyId) {
      return res.status(400).json({ error: 'Property ID is required' });
    }

    const booking = new Booking({
      property: propertyId,
      buyer: req.user.id,
      visitDate,
      notes
    });

    await booking.save();
    await booking.populate('property');
    await booking.populate('buyer', 'username email phone');
    
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update booking status
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    // Only buyer or admin can update
    if (booking.buyer.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    if (status) booking.status = status;
    await booking.save();

    res.json({ message: 'Booking updated', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete booking
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    if (booking.buyer.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await Booking.deleteOne({ _id: req.params.id });
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
