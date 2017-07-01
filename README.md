# Password-Generator-MERN
Simple MERN application that generates passwords
Using Create-React-App-Module & express-generator module connected through a proxy

## Live Link
https://young-journey-33204.herokuapp.com/
(Press try again a few times. Takes 10 seconds for pw to generate on start up from hibernation)

## Description on how to use the app
User can click on the button try again/get more to generate new passwords.

## Requirements
To run locally, npm install first.
To start up application type npm start.

## Technologies Used
- Create-React-App npm module
- Express-Generator npm module
- Heroku deployment

## Code Explaination
Using the create-react-app for the front end & express-generator for the back end.
In developer environment the front end is connected to the backend using a proxy locally on localhost:3001.
In production for heroku the postbuild from package.json directs heroku to render the react front end at the end of the deployment process.
Routing in route/pw.js directs the node server to the react front end.
