import app from './app.js'; // Import the Express app
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000; // Define the server port

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
