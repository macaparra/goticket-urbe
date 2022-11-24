const nodemailer = require("nodemailer");

 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'goticketve@gmail.com', // generated ethereal user
      pass: 'dbwtuqkdwnjitaem', // generated ethereal password
    },
  });

module.exports = transporter;
