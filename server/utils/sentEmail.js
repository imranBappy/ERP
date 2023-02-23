const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(to, name) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'imranbappy.official@gmail.com',
            pass: 'lyvbydklyqrfzvxu'
        }
    });

    var mailOptions = {
        from: 'imranbappy.official@gmail.com',
        to: to,
        subject: 'Successfully created your account',
        html: `
            <!doctype html>
            <html ⚡4email>
            <head>
                <meta charset="utf-8">
                <style amp4email-boilerplate>body{visibility:hidden}</style>
                <script async src="https://cdn.ampproject.org/v0.js"></script>
                <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
            </head>
            <body>
                <h1>Welcome ${name}</h1>
                <h4 style="color:red">Your Account is successfully created</h4>
            </body>
            </html>
    `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;