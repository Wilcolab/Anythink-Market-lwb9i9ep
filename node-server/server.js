const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// In-memory task storage (equivalent to Python's tasks list)
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box", 
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Routes

// GET /tasks - Retrieve all tasks (equivalent to Python's get_tasks)
app.get('/tasks', async (req, res) => {
  try {
    res.json({ tasks });
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /tasks - Add a new task (equivalent to Python's add_task)
app.post('/tasks', async (req, res) => {
  try {
    const { text } = req.body;
    
    // Validation
    if (!text || typeof text !== 'string' || text.trim() === '') {
      return res.status(400).json({ error: 'Task text is required and must be a non-empty string' });
    }
    
    // Add task to the list
    tasks.push(text.trim());
    
    res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET / - Root endpoint
app.get('/', async (req, res) => {
  try {
    res.json({ message: 'Hello World', timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('Error at root endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Server started at ${new Date().toISOString()}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});
