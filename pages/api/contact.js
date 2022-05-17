require("dotenv").config();
export default function Contact(req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const myMailData = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <div>
      <h1>${req.body.name}</h1>
      <p>Phone Number: ${req.body.phone}</p>
      <p>Email: ${req.body.email}</p>
      <p>Project: ${req.body.project}</p>
      <p>Timeline: ${req.body.timeline}</p>
      <p>Budget: ${req.body.price}</p>
    </div>
    `,
  };

  const customerMailData = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: `Thank you for the message!`,
    text: "Thank you for the message!",
    html: `
    <div>
      <h1>Wow! Thank you</h1>
      <p>I appreciate you taking the time to reach out. I will contact you as soon as I read your message. If you have any other questions please reach out to me on my social media. You can find the links on my website at <a href="https://www.adamflorezdesigns.com">adamflorezdesigns.com</a></p>
      <br/>
      <br/>
      <br/>
      <p>I'll Talk to you soon,</p>
      <p>Adam Florez.</p>
    </div>
    `,
  };
  transporter.sendMail(myMailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  if (res.statusCode === 200) {
    transporter.sendMail(customerMailData, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
  res.json({ success: "Message Sent!" });
}
