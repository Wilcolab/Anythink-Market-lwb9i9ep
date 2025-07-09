FROM node:14

WORKDIR /app

# Copy package files
COPY package*.json /app

# Install dependencies
RUN npm ci

# Expose port
EXPOSE 8001

# Start the application
CMD [ "npm", "start" ]
