// import nc from "next-connect";
import uploadMiddleware from "../../middleware/upload";
import transporter from "../../mailer";

const handler = nc();

handler.use(uploadMiddleware);

handler.post(async (req, res) => {
  const { originalname, buffer } = req.file;

  const mailOptions = {
    from: "keshu3428@gmail.com",
    to: "keshu3428@gmail.com",
    subject: "Subject of the email",
    text: "Body of the email",
    attachments: [
      {
        filename: originalname,
        content: buffer,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

export default handler;
