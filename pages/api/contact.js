require("dotenv").config();
export default function Contact(req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const myMailData = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `🥳 YOU GOT A MESSAGE FROM ${req.body.name} ‼️`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <div>
      <h1>${req.body.name}</h1>
      <p>Phone Number: ${req.body.phone}</p>
      <p>Email: ${req.body.email}</p>
      <p>Project: ${req.body.project}</p>
      <p>Timeline: ${req.body.timeline}</p>
      <p>Budget: $${req.body.price}.00</p>
    </div>
    `,
  };

  const customerMailData = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: `Thank you for the message!`,
    text: "Thank you for the message!",
    html: `
  <div style="font-family: sans-serif;box-sizing: border-box;max-width: 600px;padding: 2rem;margin: 0 auto;">
    <div style="display: flex;align-items: center;justify-content: space-between;margin-bottom: 4rem;">
      <h1 style="font-size: 1.5rem;">Thank you for reaching out!</h1>
      <div style="padding: 1rem;border-radius: 300px; background: #d3e6d3; height: 150px; width: 150px;margin-left: 2rem;margin-right: 1rem;">
      <img style="height: 90%; width: 90%; margin-top: 0.8rem;" src="https://i.imgur.com/1MGBjFL.png" alt="logo"/>
      </div>
    </div>
    <div style="line-height: 1.6;
      letter-spacing: 1.2;">
      <p style="display: block;">I appreciate you taking the time to reach out about your project: "${req.body.project}". I will contact you as soon as I read your message. If you have any other questions please reach out to me on my social media. You can find the links on my website at <a style="margin-top: 2rem;padding: 1rem 2rem;text-decoration: none;background: #d3e6d3;color: #1b1b1c;display: block;border-radius: 4px;text-transform: uppercase;text-align: center;" href="https://www.adamflorezdesigns.com">adamflorezdesigns.com</a></ps>
    </div>
    <hr />
    <div>
      <h2>Follow me on social:</h2>
      <ul style="display: flex;padding: 0;margin: 0;list-style: none;">
        <li style="margin-right: 1rem;background: #d3e6d3;padding: 1rem; border-radius: 4px; display:flex; align-items:center; justify-content: center;" class="social"><a style="" href=""><img style="height: 20px;margin: 0;" src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt=""></a></li>
        <li style="margin-right: 1rem;background: #d3e6d3;padding: 1rem; border-radius: 4px; display:flex; align-items:center; justify-content: center;" class="social"><a href=""><img style="height: 20px;margin: 0;" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""></a></li>
        <li style="margin-right: 1rem;background: #d3e6d3;padding: 1rem; border-radius: 4px; display:flex; align-items:center; justify-content: center;" class="social"><a  href=""><img style="height: 20px;margin: 0;" src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt=""></a></li>
        <li style="margin-right: 1rem;background: #d3e6d3;padding: 1rem; border-radius: 4px; display:flex; align-items:center; justify-content: center;" class="social"><a  href=""><img style="height: 20px;margin: 0;" src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-best-facebook-logo-icons-gif-transparent-png-images-9.png" alt=""></a></li>
      </ul>
    </div>
    <div class="medium">
      <h2>Recent Blog Posts on Medium</h2>
      <a style="margin-top: 2rem;padding: 1rem 2rem;text-decoration: none;background: #d3e6d3;color: #1b1b1c;display: block;border-radius: 4px;text-transform: uppercase;text-align: center;" href="https://medium.com/@adamseanflorez/sequelize-tips-things-to-make-your-life-e<Sequelize-Tips></Sequelize-Tips>0ea4">
        Sequelize Tips — Things to make your life easier.
      </a>
      <a style="margin-top: 2rem;padding: 1rem 2rem;text-decoration: none;background: #d3e6d3;color: #1b1b1c;display: block;border-radius: 4px;text-transform: uppercase;text-align: center;" href="https://medium.com/@adamseanflorez/top-5-monitors-for-apple-macbook-7860f9be6100">Top 5 Monitors for Apple MacBook.</a>
      <a style="margin-top: 2rem;padding: 1rem 2rem;text-decoration: none;background: #d3e6d3;color: #1b1b1c;display: block;border-radius: 4px;text-transform: uppercase;text-align: center;" href="https://medium.com/@adamseanflorez/5-ways-to-clean-up-your-javascript-reactjs-code-a9b9b07bf82">
        5 Ways to Clean up your JavaScript / ReactJS Code
      </a>
    </div>
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
