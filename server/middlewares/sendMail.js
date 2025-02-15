import { createTransport } from "nodemailer";

const sendMail = async (email, subject, data) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.Gmail,
      pass: process.env.Password,
    },
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #4a90e2;
        }
        p {
            color: #666666;
            line-height: 1.6;
        }
        .otp {
            font-size: 32px;
            color: #4a90e2;
            font-weight: bold;
        }
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 12px;
            color: #888888;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo img {
            max-width: 250px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://media.istockphoto.com/id/1170541989/vector/knowledge-or-ideas-transfer.jpg?s=612x612&w=0&k=20&c=vWwy19ZE2Pz_ii3LfwR-mfqay6VTLRIy0_WLobNM2SM=" alt="Company Logo">
        </div>
        <h1>Account Verification</h1>
        <p>Dear ${data.name},</p>
        <p>Your One-Time Password (OTP) for account verification is:</p>
        <p class="otp">${data.otp}</p>
        <p>Please use this OTP within the next 15 minutes to verify your account.</p>
        <div class="footer">
            <p>Thank you for choosing our service.</p>
            <p><strong>Skill-Swap</strong><br>Near Chandigarh University<br><a href="mailto:support@skillswap.com">support@skillswap.com</a></p>
        </div>
    </div>
</body>
</html>
`;

  await transport.sendMail({
    from: `Your Company <${process.env.Gmail}>`,
    to: email,
    subject,
    html,
  });
};



// Function to send Password Reset Email
export const sendForgotMail = async (subject, data) => {
  try {
    const transport = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.Gmail,
        pass: process.env.Password,
      },
    });

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #4a90e2;
    }
    p {
      line-height: 1.6;
      color: #666666;
    }
    .button {
      display: inline-block;
      padding: 12px 20px;
      background-color: #4a90e2;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 20px;
    }
    .footer {
      margin-top: 40px;
      text-align: center;
      font-size: 12px;
      color: #888888;
    }
    .footer a {
      color: #4a90e2;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Password Reset Request</h1>
    <p>Dear ${data.name},</p>
    <p>We received a request to reset your password. Please click the link below to reset your password:</p>
    <a href="${process.env.frontendurl}/reset-password/${data.token}" class="button">Reset Password</a>
    <p>If you did not request this, please ignore this email.</p>
    <div class="footer">
      <p>Thank you,<br><strong>Your Company Name</strong></p>
      <p>Your Address<br><a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
    </div>
  </div>
</body>
</html>
`;

    await transport.sendMail({
      from: `Your Company <${process.env.Gmail}>`,
      to: data.email,
      subject,
      html,
    });

    console.log("Password reset email sent successfully!");

  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

export default sendMail;
