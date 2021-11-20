const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');

require('dotenv').config();

function sendData(to, body){

    console.log(to)

    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.EMAIL, // TODO: your gmail account  cebTest9000x@hotmail.com cebTestEmail9000@gmail.com
            pass: process.env.PASSWORD// TODO: your gmail password
        }
    });

    // Step 2
    // transporter.use('compile', hbs({
    //     viewEngine: 'express-handlebars',
    //     viewPath: './views/'
    // }));


    // Step 3
    let mailOptions = {
        from: 'cebTestEmail9000@gmail.com', // TODO: email sender
        to: to, // TODO: email receiver
        subject: 'iFitNut',
        html: body,
        //context: {
        //    name: 'John Doe' // these are values we can send to the template of where index is at.
        //}  send extra values to template
    };

    // Step 4
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log(err);
        }
        return console.log('Email sent!!!');
    });
}


module.exports =  sendData;