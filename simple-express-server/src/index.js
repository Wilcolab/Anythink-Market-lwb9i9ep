const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(express.json());

// Basic health check endpoint (optional)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
