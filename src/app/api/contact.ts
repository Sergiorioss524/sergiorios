
import nodemailer from "nodemailer";

export default async function handler(req:any, res:any) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        // Create a transporter
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // e.g., Gmail's SMTP server
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        // Set up email data
        let mailOptions = {
            from: `"${name}" <${email}>`, // Sender address
            to: "your-email@example.com", // List of receivers
            subject: "New Contact Form Submission", // Subject line
            text: message, // Plain text body
            html: `<p>${message}</p>`, // HTML body
        };

        try {
            // Send mail
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Error sending email" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
