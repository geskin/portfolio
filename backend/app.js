const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, reason, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sg3584@alum.barnard.edu',
            pass: 'yjnr oktz fmci npad', // use app password
        },
    });

    const mailOptions = {
        from: email,
        to: 'sg3584@alum.barnard.edu',
        subject: `New contact form: ${reason}`,
        text: `From: ${name} (${email})\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).send({ success: false });
    }
});

module.exports = app;