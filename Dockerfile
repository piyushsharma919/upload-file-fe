# Use an official Node.js runtime as a parent image, specifying the version 23.8.0
FROM node:23.8.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Copy .env.sample to .env in the working directory
COPY .env.sample /app/.env

# Install project dependencies specified in package.json
RUN npm install

# Install the 'serve' package globally to serve the application
RUN npm i -g serve

# Copy the rest of the application code to the working directory
COPY . .

# Build the application using the build script defined in package.json
RUN npm run build

# Set default environment variables for the application
ENV VITE_PORT=3000

# Expose the port the application will run on
EXPOSE $VITE_PORT

# Define the command to run the application in development mode
CMD ["npm", "run", "dev"]
