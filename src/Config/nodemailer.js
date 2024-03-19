import nodemailer from "nodemailer";
const email = "keshu3428@gmail.com";
const pass = "deda uktb lgmn rdxm";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
