const mongoose = require('mongoose');
const express = require('express');
const app = express();

// this is where we will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/jokes.routes");
AllMyUserRoutes(app);

app.listen(8001, () => console.log("The server is all fired up on port 8000"));
