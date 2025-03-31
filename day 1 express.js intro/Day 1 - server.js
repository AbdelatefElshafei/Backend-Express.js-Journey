const express = require('express');
const app = express();
const port = 3000;

// Sample data store
let data = { name: 'James' };

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`
        <body>
            <h1>Data</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
    `);
});

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>');
});

// API Endpoints
app.get('/api/data', (req, res) => {
    console.log("Fetching data...");
    res.json(data);
});

app.post('/api/data', (req, res) => {
    console.log("Received new data:", req.body);
    data = req.body; // Updating data (consider validations)
    res.status(201).json({ message: "Data updated successfully" });
});

app.delete('/api/data', (req, res) => {
    console.log("Deleting data...");
    data = {}; // Clearing data
    res.status(200).json({ message: "Data deleted successfully" });
});

// Start server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));