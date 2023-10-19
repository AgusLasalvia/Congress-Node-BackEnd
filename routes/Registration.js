const Register = require('../Models/registration')
const uploadFile = require('../methods/uploadFile')
const SendMail = require('../methods/SendMail')
const express = require('express');
const routes = express.Router();

routes.post('/registration-data', function (req, res) {
    const data = req.body.registration;
    console.log(data);
    let postData = new Register(data);
    Register.findOne({
        email: data["email"], // Search for existing email on MongoDB
    }).then((result) => {
        if (result == null) {

            // MongoDB successfull
            postData.save();

            // Send mailOptions
            SendMail(
                data,
                "Registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
                "QUITEL 2023 Registration"
            );

            res.json("success"); // Response to Frontend
        } else {
            res.json("already-registered"); // Response to Frontend
        }
    });
});

routes.post('/registration-files',async function (req, res) { 
    const files = req.files; // Get all files from incoming Form
    console.log(files);

    // Check existing files, if exists, save it on Google Drive
    if (files.registration != (undefined || null)) {
        await uploadFile(files.registration, process.env.REGISTRATION_FOLDER_ID);
    }
    if (files.dinner != (undefined || null)) {
        await uploadFile(files.dinner, process.env.DINNER_FOLDER_ID);
    }
    if (files.accompanying != (undefined || null)) {
        await uploadFile(files.accompanying, process.env.ACCOMPANYING_FOLDER_ID);
    }
    res.json("submitted-successfully");
});


modules.exports = routes;