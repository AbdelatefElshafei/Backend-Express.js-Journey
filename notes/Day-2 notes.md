# Backend Journey Notes 📘

## Day -2: Serving HTML Files, Handling Requests with Buttons & Middleware

### **Serving an Entire HTML File in Express.js**

Instead of sending plain text or JSON responses, we can serve complete HTML files using Express.js. This allows us to create a simple frontend that interacts with our backend.

### **1️⃣ Setting Up Express.js**

Ensure you have Express installed:

```sh
npm init -y
npm install express
```

### **2️⃣ Creating an HTML File** (`index.html`)

This file will contain buttons that send requests to the backend.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend Interaction</title>
</head>
<body>
    <h1>Welcome to My Backend Journey</h1>
    <button onclick="sendRequest('GET', '/api/data')">Get Data</button>
    <button onclick="sendRequest('POST', '/api/data')">Send Data</button>
    <button onclick="sendRequest('DELETE', '/api/data')">Delete Data</button>
    
    <script>
        function sendRequest(method, url) {
            fetch(url, { method: method })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
        }
    </script>
</body>
</html>
```

### **3️⃣ Serving the HTML File in Express.js**

Modify `server.js` to serve the HTML file.

```javascript
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
```

### **4️⃣ Understanding Middleware in Express.js**

Middleware functions are functions that have access to the request (`req`), response (`res`), and the `next` function in the request-response cycle.

- `app.use(express.json())`: Built-in middleware to parse JSON request bodies.
- Logging Middleware (example above) logs the request method and URL.
- Middleware can be used for authentication, error handling, and more.

### **5️⃣ Running the Server**

Start the server with:

```sh
node server.js
```

Then open `http://localhost:3000/` in a browser and interact with the buttons!
