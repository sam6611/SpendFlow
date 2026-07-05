import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendMail = async ({ email, subject, html }) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transport.sendMail({
    from: '"SmartKhata" <no-reply@smartkhata.me>',
    to: email,
    subject,
    html,
  });

};

export default sendMail;