const { sql } = require('@vercel/postgres');
const nodemailer = require('nodemailer');
const { setCorsHeaders } = require('./_utils/auth');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required: name, email, subject, message' });
  }

  // Basic email validation
  if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ error: 'Please provide a valid email address' });
  }

  try {
    // Save inquiry to database
    await sql`
      INSERT INTO inquiries (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
    `;

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Unique Driftwood Creations" <${process.env.GMAIL_USER}>`,
        to: process.env.NOTIFICATION_EMAIL,
        replyTo: email,
        subject: `🪵 New Inquiry: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1a1a1a; color: #ebe0d0; padding: 30px; border-radius: 8px;">
            <div style="border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 25px;">
              <h1 style="color: #d4af37; font-size: 20px; margin: 0;">Unique Driftwood Creations</h1>
              <p style="color: #a69b8c; font-size: 12px; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">New Website Inquiry</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #a69b8c; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Name</td>
                <td style="padding: 10px 0; color: #ebe0d0; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a69b8c; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a69b8c; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Subject</td>
                <td style="padding: 10px 0; color: #ebe0d0; font-size: 15px;">${subject}</td>
              </tr>
            </table>
            
            <div style="background-color: #222; padding: 20px; border-radius: 6px; margin-top: 15px; border-left: 3px solid #c05c35;">
              <p style="color: #a69b8c; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Message</p>
              <p style="color: #ebe0d0; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #333; text-align: center;">
              <p style="color: #a69b8c; font-size: 11px; margin: 0;">This inquiry was submitted via your website contact form.</p>
              <p style="color: #a69b8c; font-size: 11px; margin: 4px 0 0 0;">Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      // Log email error but don't fail the request — inquiry is already saved
      console.error('Email notification failed:', emailError.message);
    }

    return res.status(200).json({ success: true, message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return res.status(500).json({ error: 'Failed to submit inquiry. Please try again.' });
  }
};
