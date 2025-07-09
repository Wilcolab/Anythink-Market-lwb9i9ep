FROM node:14

WORKDIR /app

# Copy package files
COPY package*.json /app

# Install dependencies
RUN yarn install

# Expose port
EXPOSE 8001

# Start the application
CMD [ "yarn", "start" ]
