const nodemailer = require('nodemailer'); 

// Email configuration
const mail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,  // Default Gmail smtp port
    secure: true,
    auth: {
        user: "email",
        pass: "password", // Password created from gmail for apps
    },
});

// Email send method
function SendMail(receiver, message, subject) {

    // Mail individual options
    let mailOptions = {
        from: "email",
        to: receiver["email"],
        subject: subject,
        text: `${receiver["firstName"]} ${receiver["lastName"]} : \n ${message}`,
    };

    mail.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent successfully to: " + receiver["email"]);
        }
    });
}

module.exports = SendMail;
// modules.exports = sendMail;
