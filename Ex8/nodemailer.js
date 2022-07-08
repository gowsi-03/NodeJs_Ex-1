const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gowsigan0301@gmail.com",
    pass: "gowsi0301",
  },
  port: 465,
  host: "smtp.gmail.com",
});

let mailOptions = {
  from: "gowsigan0301@gmail.com",
  to: "gowsip2@gmail.com",
  subject: "Testing my nodemailer module",
  text: "This is easy !",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email has sent: " + info.response);
  }
});
