require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
app.use(bodyParser.json());
app.use(cors())

const generateHTML = (data) => {
  const skills = data.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
  const experiences = data.experience.split(',').map(exp => `<li>${exp.trim()}</li>`).join('');

 return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Resume - ${data.name}</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
    }
    .resume-wrapper {
      width: 210mm;
      min-height:100%,
      display: table;
      table-layout: fixed;
    }
    .left-panel {
      width: 30%;
      background-color: ${data.themeColor};
      color: white;
      display: table-cell;
      vertical-align: top;
      padding: 20px;
      min-height:100%,
    }
    .right-panel {
      width: 70%;
      background-color: white;
      display: table-cell;
      vertical-align: top;
      padding: 40px;
      min-height:100%,
    }
    .section { margin-bottom: 30px; }
    .section h2 {
      font-size: 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 4px;
    }
    .section p, .section li {
      font-size: 13px;
      line-height: 1.5;
      margin: 0 0 6px;
    }
    ul { padding-left: 20px; margin: 0; }
    h1 { font-size: 28px; margin: 0; color:white;  background-color: ${data.themeColor};border-radius:20px;padding:10px }
    h3 { font-size: 14px; font-weight: 400; color: #666; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="resume-wrapper">
    <div class="left-panel">
      <div class="section">
        <h2>About Me</h2>
        <p>${data.about}</p>
      </div>
      <div class="section">
        <h2>Contact</h2>
        <p>📞 ${data.phone}</p>
        <p>✉️ ${data.email}</p>
        <p>📍 ${data.address}</p>
      </div>
      <div class="section">
        <h2>Skills</h2>
        <ul>${skills}</ul>
      </div>
    </div>
    <div class="right-panel">
      <div class="section header">
        <h1>${data.name}</h1>
        <h3>${data.field}</h3>
      </div>
      <div class="section">
        <h2>🎓 Education</h2>
        <p>${data.education}</p>
      </div>
      <div class="section">
        <h2>💼 Experience</h2>
        <ul>${experiences}</ul>
      </div>
    </div>
  </div>
</body>
</html>
`;
};

app.post('/generate-pdf', async (req, res) => {
  const data = req.body;
  const htmlContent = generateHTML(data);

  const options = { format: 'A4' };

  pdf.create(htmlContent, options).toFile('resume.pdf', async (err, result) => {
    if (err) return res.status(500).send('Error creating PDF');

    // Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
  from: process.env.EMAIL_USER,
  to: data.email,
  subject: 'Your Resume PDF is Ready!',
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Your Resume</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          background-color: #ffffff;
          margin: 40px auto;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h2 {
          color: #333333;
        }
        p {
          color: #555555;
          line-height: 1.6;
        }
        .btn {
          display: inline-block;
          padding: 12px 20px;
          margin-top: 20px;
          background-color: #007BFF;
          color: #ffffff;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          font-size: 13px;
          color: #888;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Hello ${data.name || "there"},</h2>
        <p>
          Thank you for using our resume builder. Your resume has been generated successfully and is attached to this email as a PDF file.
        </p>
        <p style="margin-top: 30px;">
          If you need any changes or want to generate a new one, feel free to visit our website again.
        </p>
        <div class="footer">
          &copy; ${new Date().getFullYear()} MukeshCoderHub | All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `,
  attachments: [
    {
      filename: 'resume.pdf',
      path: result.filename
    }
  ]
};


    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email error:', error); // <--- ADD THIS
        return res.status(500).send('Error sending email');
      }
      res.send({ message: 'PDF sent to email!', info });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

