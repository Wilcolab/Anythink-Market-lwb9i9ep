const express = require('express');

const app = express();
const PORT = 8001;

// Task data (equivalent to Python's tasks list)
let tasks = [
  "Write a diary entry from the future", 
  "Create a time machine from a cardboard box", 
  "Plan a trip to the dinosaurs", 
  "Draw a futuristic city", 
  "List items to bring on a time-travel adventure"
];

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes (migrated from Python FastAPI)

// Root route - equivalent to Python's @app.get("/")
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Get all tasks - equivalent to Python's @app.get("/tasks")
app.get('/tasks', (req, res) => {
  res.json({ tasks: tasks });
});

// Add new task - equivalent to Python's @app.post("/tasks")
app.post('/tasks', (req, res) => {
  // Validate request body (equivalent to Pydantic validation)
  if (!req.body || !req.body.text || typeof req.body.text !== 'string') {
    return res.status(400).json({ 
      error: 'Invalid request body. Expected { "text": "string" }' 
    });
  }
  
  // Add task to array
  tasks.push(req.body.text);
  
  // Return success message
  res.json({ message: 'Task added successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
