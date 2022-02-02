const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');

require('dotenv').config();

function sendData(to, body) {

    console.log(to)

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // TODO: your gmail account  cebTest9000x@hotmail.com cebTestEmail9000@gmail.com
            pass: process.env.PASSWORD// TODO: your gmail password
        }
    });

    let mailOptions = {
        from: 'cebTestEmail9000@gmail.com', // TODO: email sender
        to: to, // TODO: email receiver
        subject: 'iFitNut',
        html: body,
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log(err);
        }
        return console.log('Email sent!!!');
    });
}

module.exports = sendData;