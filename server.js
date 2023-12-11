// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');  // Import Sequelize instance from db.js
const studentRoutes = require('./routes/student');  // Import studentRoutes from routes/student.js

const app = express();
const port = 8000;

app.use(bodyParser.json());  // Middleware to parse JSON requests

app.use('/api/v1/students', studentRoutes);  // Use the studentRoutes for paths starting with '/api/v1/students'

// Welcome message for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Sequelize API');
});

// Sync the Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database and tables synced!');

  // Start the Express app and listen on the specified port
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});



/*    

 SEQULIZEAPI
├── config/
│   └── config.json            // Configuration file for Sequelize (database credentials)
├── controllers/
│   └── studentController.js   // Controller functions for handling CRUD operations
├── models/
│   ├── index.js               // Index file to import and export Sequelize models
│   └── student.js             // Definition of the Sequelize model for the "Student" entity
├── routes/
│   └── student.js             // Express router for defining API routes related to students
├── server.js                   // Main file for setting up the Express app and starting the server
└── db.js                       // Sequelize instance setup and configuration
*/
