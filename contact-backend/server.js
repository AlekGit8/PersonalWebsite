const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// Endpoint to handle contact form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received submission:', { name, email, message }); // Log to terminal
    res.json({ status: 'success', message: 'Data received' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});