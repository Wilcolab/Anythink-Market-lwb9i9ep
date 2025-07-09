# Node.js Server

This project now uses a Node.js server implemented with Express.js to manage the task list. The Node.js server replaces the previous FastAPI Python server, providing the same API routes for task management.

## Project Structure

The updated project includes the following files and directories for the Node.js server:

- `node-server/src/index.js`: Main entry point for the Express.js server, implementing the API routes for adding and retrieving tasks.
- `node-server/package.json`: Lists dependencies and scripts for the Node.js server.
- `node-server/Dockerfile`: Builds a Docker image for the Node.js server, installing dependencies and starting the server.
- `docker-compose.yml`: Updated to use the Node.js server service instead of the Python server.

## Getting Started

To run the Node.js server using Docker:

- Build and start the Docker containers:

  ```shell
  docker compose up
  ```

  This will build the Docker image for the Node.js server and start the containers as defined in `docker-compose.yml`.

- The Node.js server will be accessible at port `8000`.

## API Routes

The Node.js server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.

---

The previous Python FastAPI server files are no longer used. All task management functionality is now handled by the Node.js server.
# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
