const express = require('express');
const router = express.Router();
const { connectDB, sql } = require('../db');

// Route for getting all salesmen
router.get('/customers', async (req, res) => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT * FROM customers'); // Query for salesmen
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching salesmen:', err.message);
        res.status(500).json({ error: 'Database error' });
    }
});

// Other routes (for users, etc.)
router.get('/customers', async (req, res) => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT * FROM customers'); // Make sure the Users table exists
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
