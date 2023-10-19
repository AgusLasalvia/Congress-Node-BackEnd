const fileUpload = require('express-fileupload');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');

// Mongoose configuration
mongoose.connect(process.env.MONGODB); // MongoDB connection String
db = mongoose.connection.once("open", () => {
    console.log("Mongodb connected"); // Connnection verification message
});

require('dotenv').config

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(cors());

// --------------------ROUTES DECLARATION------------------------------------
const PreRegistration = require('./routes/PreRegistration');
const Registration = require('./routes/Registration');
const Abstract = require('./routes/Abstract');

app.use('/pre-registration', PreRegistration);
app.use('/registration', Registration);
app.use('/abstract', Abstract);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});