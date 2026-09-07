const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string'
      || !username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const safeRole = ['BUYER', 'SELLER'].includes(role) ? role : 'BUYER';
    const user = new User({ username, email, password, role: safeRole });
    await user.save();

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await user.matchPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get current user
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user profile
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    if (req.user.id !== req.params.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Whitelist: role and password must never be settable through this route —
    // role changes bypass authorization, and password bypasses the pre('save')
    // hash hook since findByIdAndUpdate doesn't run it, storing it in plaintext.
    const { phone, address, profilePhoto, firstName, lastName, city, state, zipCode, bio } = req.body;
    const updates = { phone, address, profilePhoto, firstName, lastName, city, state, zipCode, bio };

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true }).select('-password');
    res.json({ message: 'User updated', user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
