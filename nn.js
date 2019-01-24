var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vithurasan546@gmail.com',
    pass: '12345678'
  }
});

var mailOptions = {
  from: 'vithurasan546@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  text: 'That was easy!',
  html: '<h1>Welcome</h1><p>That was easy!</p>'

};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
