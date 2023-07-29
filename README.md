# Task Management

This is a README file that provides instructions on how to run the ReactJS application locally on your machine.

## Prerequisites

Before running the application, make sure you have the following software installed on your machine:

Node.js (version 10 or above)
npm (Node Package Manager)

## Installation

Follow the steps below to install and run the ReactJS application:

1. Clone the repository to your local machine using Git or download the source code as a ZIP file and extract it.

   ### `git clone https://github.com/Jahanzaib9/assesment-test.git`

2. Open a terminal or command prompt and navigate to the project's root directory.

   ### `cd repo`

3. Install the project dependencies using npm or yarn.
   ### `npm install` or `yarn install`

## Running the front-end Application

Once the installation is complete, you can start the application by following these steps:

1. In the terminal or command prompt, navigate to the project's root directory if you're not already there.

2. Start the development server.

### `npm start`

3. The application should now be running locally on your machine. Open a web browser and visit the following URL:

### `http://localhost:3000`

You should see the ReactJS application running in the browser.

## Running the back-end server

1. install json-server globally using the following command

### `npm install -g json-server`

2. Then, run the server from the root directory of the repo using another terminal/command prompt

### `json-server --watch db.json --port 5000`

## Building the Application

If you want to create a production-ready build of the application, you can use the following command:

### `npm run build`

This command will create an optimized production build in the build directory. You can then deploy this build to a web server or any other hosting platform.

## Conclusion

You have successfully installed and run the ReactJS application locally on your machine. Feel free to explore and modify the code to meet your requirements. If you encounter any issues or have any questions, please refer to the project's documentation.
