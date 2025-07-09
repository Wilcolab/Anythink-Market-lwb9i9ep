# Node.js Server

A modern Express.js server with REST API endpoints for the Anythink Market application.

## Features

- Express.js web framework
- CORS enabled
- Security headers with Helmet
- Request logging with Morgan
- Environment variable support
- RESTful API for tasks management
- Error handling middleware
- Health check endpoint

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the node-server directory:
   ```bash
   cd node-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Or start the production server:
   ```bash
   npm start
   ```

The server will be running at `http://localhost:3000`

## API Endpoints

### Base
- `GET /` - Welcome message and API documentation
- `GET /health` - Health check endpoint

### Tasks API
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Example Usage

#### Get all tasks
```bash
curl http://localhost:3000/api/tasks
```

#### Create a new task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "New Task", "completed": false}'
```

#### Update a task
```bash
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Task", "completed": true}'
```

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (Jest)

## Environment Variables

Create a `.env` file in the root directory with:

```
PORT=3000
NODE_ENV=development
```

## Project Structure

```
node-server/
├── src/
│   └── index.js          # Main application file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
└── README.md            # This file
```
