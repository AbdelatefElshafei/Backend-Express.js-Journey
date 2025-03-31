# Backend Journey Notes 📘

## Day 1: Introduction to Express.js

### **What is Express.js?**

Express.js is a minimal and flexible **Node.js web framework** that provides a robust set of features for building web and API applications. It simplifies handling HTTP requests, routing, and middleware management.

### **Setting Up an Express Server**

1. **Initialize a Node.js Project**

   ```sh
   npm init -y
   ```

   This command creates a `package.json` file with default settings.

2. **Install Express.js**

   ```sh
   npm install express
   ```

   Adds Express to the project as a dependency.

3. **Create a Basic Server (********`server.js`********)**

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.use(express.json()); // Middleware to parse JSON requests

   app.get('/', (req, res) => {
       res.send('<h1>Welcome to My Backend Journey!</h1>');
   });

   app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
   ```

   - `express.json()` is used to handle JSON request bodies.
   - `app.get('/')` defines a route for the homepage.
   - `app.listen(port, callback)` starts the server.

### **Understanding API Endpoints (CRUD Operations)**

**Endpoints Created:**

1️⃣ **GET /api/data** → Fetch existing data.

```javascript
app.get('/api/data', (req, res) => {
    res.json({ name: 'James' });
});
```

- Logs a message and returns the `data` object as JSON.

2️⃣ **POST /api/data** → Add or update data.

```javascript
app.post('/api/data', (req, res) => {
    data = req.body;
    res.status(201).json({ message: 'Data updated successfully' });
});
```

- Updates the stored data.
- Responds with status `201 Created`.

3️⃣ **DELETE /api/data** → Remove data.

```javascript
app.delete('/api/data', (req, res) => {
    data = {};
    res.status(200).json({ message: 'Data deleted successfully' });
});
```

- Clears the stored data object.

### **Middleware in Express.js**

Middleware functions are used to **process requests before reaching route handlers**.

- `express.json()` is a built-in middleware that parses JSON bodies.
- Additional middleware can be added for logging, authentication, etc.

### **Running the Server**

**Manual Start:**

```sh
node server.js
```

**Auto Restart Without Nodemon (Node.js 18+):**

```sh
node --watch server.js
```

- This allows automatic reloading when files change.

### **Challenges Faced**

- **Managing Data in Memory:** Right now, data resets on server restart. Next step: **using a database**.
- **Difference Between ********`res.send()`******** and ********`res.json()`********:**
  - `res.send()` can return **HTML, strings, or JSON**, but is less explicit.
  - `res.json()` ensures the response is **always in JSON format**.


