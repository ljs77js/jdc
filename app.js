import express from 'express';
import userRoutes from './routes/user.js';

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Route registration
app.use('/users', userRoutes);

export default app;
