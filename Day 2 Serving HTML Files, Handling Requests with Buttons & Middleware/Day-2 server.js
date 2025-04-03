const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Middleware example
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Move to the next middleware or route handler
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Sample API endpoints
app.get('/api/data', (req, res) => {
    res.json({ message: 'Fetched Data' });
});

app.post('/api/data', (req, res) => {
    res.status(201).json({ message: 'Data sent successfully' });
});

app.delete('/api/data', (req, res) => {
    res.json({ message: 'Data deleted' });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));