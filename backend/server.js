// Import the Express library
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port number to listen on
const port = process.env.PORT || 8000;

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
