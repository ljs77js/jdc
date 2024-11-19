import express from 'express';
import pool from '../database/connection.js'; // Import the pool

const router = express.Router();

// GET /users/:id - Retrieve user information by ID
router.get('/:id', async (req, res) => {
    const userId = req.params.id;

    // Validate if the id is a number
    if (isNaN(userId)) {
        return res.status(400).send('Invalid user ID');
    }

    try {
        // Execute the database query using the connection pool
        const [results] = await pool.query(
            'SELECT * FROM users WHERE id = ?',
            [userId]
        );

        // If no user is found
        if (results.length === 0) {
            return res.status(404).send('User not found');
        }

        res.json(results[0]); // Return the user information as JSON
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
