# Step 1: Use an official Node.js image from the Docker Hub
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the React app files into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lightweight web server to serve the React app
FROM nginx:alpine

# Step 8: Copy the built app to the nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port the app will run on (default is 80 for nginx)
EXPOSE 80

# Step 10: Run nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]

