# JS Express Server

A simple Express.js server with no endpoints, set up with nodemon for development.

## Features

- Express.js server listening on port 8001
- Nodemon for automatic restart on code changes
- Docker support for containerization
- Basic logging middleware

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional)

### Installation

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

The server will start on http://localhost:8001 and automatically restart when you make changes to the code.

### Docker

To run the server using Docker:

1. Build the Docker image:
```bash
docker build -t js-express-server .
```

2. Run the container:
```bash
docker run -p 8001:8001 js-express-server
```

## Scripts

- `npm start` / `yarn start` - Start development server with nodemon
- `npm run dev` / `yarn dev` - Same as start (alias)
- `npm run prod` / `yarn prod` - Start production server without nodemon

## Project Structure

```
js-server/
├── src/
│   └── app.js          # Main application file
├── package.json        # Node.js dependencies and scripts
├── Dockerfile          # Docker configuration
├── .gitignore          # Git ignore rules
├── .dockerignore       # Docker ignore rules
└── README.md           # This file
```
