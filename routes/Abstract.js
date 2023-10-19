const express = require('express');
const Abstract = require('../Models/abstracts')
const uploadFile = require('../methods/uploadFile');
const SendMail = require('../methods/SendMail');
const routes = express.Router();
// Abstract data Form Submition
routes.post("/submit-abstract-data", (req, res) => {
    const body = req.body.abstract; // Get incoming Form Data
    let postData = new Abstract(body); // Declare a new model with Form data
    console.log(body);
    postData.save();
    res.json("data-validated");
    SendMail(
        body,
        "Abstract sent successfully, you will be notified if it has been routesroved,\n\
      otherwise you will be asked for modifications",
        "QUITEL 2023 Abstract Submition"
    );
});

// Abstract Files Form Submition
routes.post("/submit-abstract-files", async (req, res) => {
    // All same as registraiton-files
    const { files } = req;
    console.log(files);
    if (files.editableFormat != (undefined || null)) {
        await uploadFile(files.editableFormat, process.env.ABSTRACT_FOLDER_ID);
    }
    if (files.pdfFormat != (undefined || null)) {
        await uploadFile(files.pdfFormat, process.env.ABSTRACT_FOLDER_ID);
    }
    res.json("submitted-successfully");
});


modules.exports = routes;