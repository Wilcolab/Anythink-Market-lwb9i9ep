# Anythink Market - Dual Server Setup

This project demonstrates both Python FastAPI and Node.js Express servers running simultaneously, providing identical task management APIs. This setup allows for easy migration testing and comparison between the two implementations.

## Architecture Overview

The project includes both servers running in parallel:
- **Python FastAPI Server**: Port `8000` 
- **Node.js Express Server**: Port `8001`

Both servers provide the same API endpoints and functionality, making it easy to migrate from Python to Node.js while maintaining backward compatibility.

## Project Structure

```
.
├── docker-compose.yml          # Orchestrates both servers
├── python-server/              # Original FastAPI implementation
│   ├── src/
│   │   ├── main.py            # FastAPI server with task routes
│   │   └── __init__.py        # Python package marker
│   ├── Dockerfile             # Python server containerization
│   └── requirements.txt       # Python dependencies
└── node-server/               # New Express.js implementation
    ├── server.js              # Express server with converted routes
    ├── package.json           # Node.js dependencies and scripts
    ├── Dockerfile             # Node.js server containerization
    ├── .dockerignore          # Docker ignore patterns
    └── README.md              # Node.js specific documentation
```

## Getting Started

### Running Both Servers (Recommended)

To run both servers simultaneously using Docker Compose:

```shell
docker compose up --build
```

This will:
- Build Docker images for both servers
- Start the Python server on port `8000`
- Start the Node.js server on port `8001`
- Create a shared network for inter-service communication

### Running Individual Servers

**Python Server Only:**
```shell
docker compose up python-server
```

**Node.js Server Only:**
```shell
docker compose up node-server
```

### Local Development

**Python Server:**
```shell
cd python-server
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8000
```

**Node.js Server:**
```shell
cd node-server
npm install
npm run dev  # Uses nodemon for hot reload
```

## API Endpoints

Both servers provide identical API functionality:

### GET /tasks
Retrieves the current task list.

**Request:**
```shell
curl -X GET http://localhost:8000/tasks  # Python server
curl -X GET http://localhost:8001/tasks  # Node.js server
```

**Response:**
```json
{
  "tasks": [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
  ]
}
```

### POST /tasks
Adds a new task to the list.

**Request:**
```shell
curl -X POST http://localhost:8000/tasks \  # Python server
  -H "Content-Type: application/json" \
  -d '{"text": "Build a rocket ship"}'

curl -X POST http://localhost:8001/tasks \  # Node.js server
  -H "Content-Type: application/json" \
  -d '{"text": "Build a rocket ship"}'
```

**Response:**
```json
{
  "message": "Task added successfully"
}
```

### GET /
Root endpoint with server information.

**Node.js Response:**
```json
{
  "message": "Hello World",
  "timestamp": "2025-07-09T19:34:14.113Z"
}
```

**Python Response:**
```
"Hello World"
```

## Migration Guide

### From Python to Node.js

The Node.js server has been designed to be a drop-in replacement for the Python server:

1. **API Compatibility**: All endpoints maintain the same request/response format
2. **Error Handling**: Comprehensive validation and error responses
3. **Async Operations**: Ready for database integration with async/await
4. **Docker Support**: Full containerization with optimized builds

### Key Differences

| Feature | Python FastAPI | Node.js Express |
|---------|---------------|----------------|
| **Port** | 8000 | 8001 |
| **Runtime** | Python 3.9 | Node.js 18 |
| **Framework** | FastAPI + Uvicorn | Express.js |
| **Validation** | Pydantic models | Manual validation |
| **Auto Docs** | Built-in Swagger UI | Manual documentation |
| **Hot Reload** | `--reload` flag | nodemon |

### Production Considerations

For production migration:
1. Update client applications to use port `8001`
2. Implement database connectivity in Node.js server
3. Add authentication/authorization middleware
4. Configure proper logging and monitoring
5. Update load balancer/reverse proxy configuration

## Development Features

- **Hot Reload**: Both servers support development mode with auto-restart
- **Docker Compose**: Simplified multi-container development
- **Network Isolation**: Services communicate through Docker network
- **Volume Mounting**: Source code changes reflect immediately
- **Comprehensive Logging**: Request/response logging for debugging

## Next Steps

1. **Database Integration**: Add persistent storage (MongoDB, PostgreSQL)
2. **Authentication**: Implement JWT or OAuth2 authentication
3. **API Documentation**: Add OpenAPI/Swagger documentation to Node.js
4. **Testing**: Add comprehensive unit and integration tests
5. **CI/CD**: Set up automated testing and deployment pipelines

