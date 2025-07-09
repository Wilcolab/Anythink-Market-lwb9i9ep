# Simple Express Server

A minimal Express.js server with no endpoints, designed for easy development and Docker deployment.

## Features

- 🚀 Express.js server listening on port 8001
- 🔄 Nodemon for automatic restarts during development
- 🐳 Docker support for containerized deployment
- 📝 Basic request logging middleware
- 🛡️ Graceful shutdown handling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker (for containerized deployment)

### Local Development

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

   The server will start on `http://localhost:8001` and automatically restart when you make changes to the code.

### Production

To run in production mode:
```bash
npm run prod
```

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t simple-express-server .
   ```

2. Run the container:
   ```bash
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001`.

## Scripts

- `npm start` / `yarn start` - Start development server with nodemon
- `npm run dev` - Same as start (alternative command)
- `npm run prod` - Start production server

## Project Structure

```
js-server/
├── server.js          # Main server file
├── package.json       # Project dependencies and scripts
├── Dockerfile         # Docker configuration
├── .dockerignore      # Files to ignore in Docker build
└── README.md          # This file
```

## Adding Endpoints

To add endpoints to your server, edit `server.js` and add routes before the `app.listen()` call:

```javascript
// Example endpoints
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
```
