
var express = require("express");
var path = require("path");
var app = express();

var PORT = 3000;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var nodemailer = require('nodemailer');


var email = document.getElementById(reserve_uniqueID);
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hotrest123@gmail.com',
    pass: '1111asdf'
  }
});

var mailOptions = {
  from: 'hotrest123@gmail.com',
  to: email,
  subject: 'Table Ready!',
  text: 'Thank you for your patience. Your table is ready! Please see the the hostess to be seated.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
