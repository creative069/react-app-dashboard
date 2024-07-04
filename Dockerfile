FROM node:20-alpine

RUN mkdir /ReactDashboard

WORKDIR /ReactDashboard

COPY package*.json .

RUN npm install

COPY . . 
# Expose the port the app runs on
EXPOSE 3000
# Command to run the app
CMD ["npm", "start"]



