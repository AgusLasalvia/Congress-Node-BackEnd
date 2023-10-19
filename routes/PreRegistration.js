const express = require('express');
const routes = express.Router();
const preRegister = require('../Models/pre-register');
const SendMail = require('../methods/SendMail');


routes.post('/', function (req, res) {
    const data = req.body.preRegistration;
    console.log(data);
    let postData = new preRegister(data);
    preRegister
        .findOne({
            email: data["email"],
        })
        .then((result) => {
            if (result == null) {

                // Save data on MongoDB
                postData.save();

                // Send confirmation mail
                SendMail(
                    data,
                    "Pre registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
                    "QUITEL 2023 Pre Registration"
                );
                res.json("success");
            } else {
                res.json("already-pre-registered");
            }
        });
});


modules.exports = routes;