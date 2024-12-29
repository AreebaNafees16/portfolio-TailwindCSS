// // pages/api/send.js

// import nodemailer from "nodemailer";
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { email, subject, message } = req.body;

//     // Create a transporter object using SMTP transport
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // Replace with your email provider if necessary
//       auth: {
//         user: process.env.EMAIL_USER, // Your email address
//         pass: process.env.EMAIL_PASS, // Your email password
//       },
//     });

//     // Setup email data
//     const mailOptions = {
//       from: email, // Sender address
//       to: process.env.EMAIL_USER, // Recipient address
//       subject: subject,
//       text: message,
//     };

//     try {
//       // Send the email
//       await transporter.sendMail(mailOptions);
//        res.status(200).json({ message: "Message sent successfully!" });
//     } catch (error) {
//       console.error("Error sending email:", error);
//        res.status(500).json({ error: "Failed to send message" });
//     }
//   } else {
//     // If the method is not POST, return 405 Method Not Allowed
//    res.status(405).json({ error: "Method Not Allowed" });
//   }
// }
