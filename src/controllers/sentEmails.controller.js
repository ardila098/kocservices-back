import SentEmails from "../models/SentEmails";

const nodeMailer = require("nodemailer");

export const sentEmails = async (req, res) => {
  const newClient = await new SentEmails({
    name: req.body.name,
    dot: req.body.dot,
    email: req.body.email,
    phone: req.body.phone,
  }).save();

  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
      user: "ardilajr098@gmail.com",
      pass: "dodnrtogblrgizij",
    },
  });

  let mail = {
    from: "",
    // to: "larangoinsurance@gmail.com",
    to: "ardilajr098@gmail.com",
    subjet: "clients insurances",
    Text: "ardila prueba",
    html: `
    <div>
         <div>  <span>   name :  ${newClient.name}</span>    </div>
             <div><span> dot :  ${newClient.dot}</span>    </div>
            <div> <span> phone :  ${newClient.phone}</span>    </div>
           <div> <span>  email :  ${newClient.email}</span>    </div>
              </div>
              `,
  };

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log("error sending email", error);
      res.status(500).json({ error: error.message });
    } else {
      console.log("error sent");
      res.status(200).json({
        message: "email send",
      });
    }
  });
};
