FROM node:20-alpine AS builder

RUN mkdir /ReactDashboard

WORKDIR /ReactDashboard

COPY package*.json .

RUN npm install

COPY . . 

# Build the application
RUN npm run build

# Use nginx to serve the app
FROM nginx:alpine
COPY --from=builder /ReactDashboard/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Command to run the app
CMD ["nginx", "-g", "daemon off;"]

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf