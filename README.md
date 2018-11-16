# Serverless Storage App

## Overview

This project is designed to be a completely serverless application that allows authenication, storage and retrieval of files.

## User Interface

The user interface has been created using the React.js framework, files can be found in the `serverless-app-client/src` folder. The files required for the user interface should be stored in an S3 bucket the name of which can be added to the `deploy` script in the `package.json` file. AWS CloudFront can then be configured to serve the user interface directly from the S3 bucket.

## Authentication

The authentication used AWS Cognito. To set authentication up you should create a Cognito user pool and identity pool. An app client should be created in the user pool for the client application. A user should be added and verified in the user pool to allow credentials to be used on login. The identity pool should give the app client permissions to store and retrive files from the S3 bucket where the uploaded files will be stored. The `config.js` file should be updated with values required to connect to Cognito.

## Storage and Retrival

The storage and retrieval of files that will be uploaded via the user interface should be stored in S3. A user pool with access to store and retrieve files from S3 will be required with a validated to allow the application to access the S3 bucket. The `config.js` file should be updated with values required to connect to S3.

## TODO:

- Use Terraform to automate the creation AWS infrastructure
- Create API to be used when uploading and retrieving files from S3 and authenticating via Cognito
- Get configuration values from environmental variables
- Created automated user interface and unit tests
- Create build pipeline to run tests against application
- Allow files to be viewed
- Reload files list after file added
