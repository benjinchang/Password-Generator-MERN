# Password-Generator-MERN
Simple MERN application that generates passwords
Using Create-React-App-Module & express-generator module connected through a proxy

## Live Link
https://young-journey-33204.herokuapp.com/ <br>
Application is in hibernation mode. <br>
Press try again button to load passwords. <br>
May take up to 15 seconds for passwords to be generated after being awoken from hibernation.

<img alt="application screenshot" src="https://user-images.githubusercontent.com/19923593/27760477-20af9588-5dfd-11e7-8b51-26dcebf45b66.jpg">

## Getting Started

### Prerequisites

Node.js

### Installing
Install required dependencies
```
npm install
```
Install Create-React-App & Express-Generator once globally:
```sh
npm install -g create-react-app express-generator
```
## Running Locally
Requires the node server and react server to be both run

Run the following command in root folder & client folder
```sh
npm run start 
```

## Deployment
Deployed on heroku

## Built With
* [Create React App with Express in Production - By Dave Ceddia](https://daveceddia.com/create-react-app-express-production/) - Tutorial on using Create React App with node express
* [Create-React-App](https://github.com/facebookincubator/create-react-app) - React boilerplate template
* [Express-Generator](https://github.com/expressjs/generator) - Node Express boilerplate template

## Code Explaination
Using the create-react-app for the front end & express-generator for the back end. <br>
In developer environment the front end is connected to the backend using a proxy locally on localhost:3001. <br>
In production for heroku the postbuild from package.json directs heroku to render the react front end at the end of the deployment process. <br>
Routing in route/pw.js directs the node server to the react front end. <br>
