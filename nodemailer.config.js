const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
})

module.exports = transporter;