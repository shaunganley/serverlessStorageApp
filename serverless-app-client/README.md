# Serverless Storage App

## Overview

This project is designed to be a completely serverless application that allows authenication, storage and retrieval of files.

## User Interface

The user interface has been created using the React.js framework, files can be found in the `serverless-app-client/src` folder. The files required for the user interface should be stored in an S3 bucket the name of which can be added to the `deploy` script in the `package.json` file. AWS CloudFront can then be configured to serve the user interface directly from the S3 bucket.

## Authentication

The authentication used AWS Cognito. To set authentication up you should create a Cognito user pool and identity pool. An app client should be created in the user pool for the client application. A user should be added and verified in the user pool to allow credentials to be used on login. The identity pool should give the app client permissions to store and retrive files from the S3 bucket where the uploaded files will be stored. The `config.js` file should be updated with values required to connect to Cognito.

## Storage and Retrival

The storage and retrieval of files that will be uploaded via the user interface should be stored in S3. A user pool with access to store and retrieve files from S3 will be required with a validated to allow the application to access the S3 bucket. The `config.js` file should be updated with values required to connect to S3.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Runs the `npm run build` script above.<br>
Takes the `build` folder generated above and attempts to store the contents in the specified S3 bucket.<br>
This required the `aws-cli` to be installed and configured to be able to store in S3.<br>
AWS CloudFront can then be configured to serve your files directly from S3.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
