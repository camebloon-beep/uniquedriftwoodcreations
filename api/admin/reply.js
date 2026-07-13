const { sql } = require('@vercel/postgres');
const nodemailer = require('nodemailer');
const { verifyToken, setCorsHeaders } = require('../_utils/auth');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify admin authentication and get decoded token info
  const decoded = verifyToken(req);
  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }

  const adminEmail = decoded.email || process.env.NOTIFICATION_EMAIL || 'camebloon@gmail.com';
  const { inquiryId, replyMessage } = req.body || {};

  if (!inquiryId || !replyMessage) {
    return res.status(400).json({ error: 'inquiryId and replyMessage are required' });
  }

  try {
    // 1. Fetch original inquiry
    const { rows } = await sql`
      SELECT name, email, subject, message 
      FROM inquiries 
      WHERE id = ${inquiryId}
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    const inquiry = rows[0];

    // 2. Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 3. Send email reply to customer
    await transporter.sendMail({
      from: `"Unique Driftwood Creations" <${process.env.GMAIL_USER}>`,
      to: inquiry.email,
      replyTo: adminEmail, // Direct replies back to the logged-in admin email
      subject: `Re: ${inquiry.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ebe0d0; color: #1a1a1a; padding: 30px; border-radius: 8px; border: 1px solid #d4af37;">
          <div style="border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #c05c35; font-size: 20px; margin: 0; font-family: Georgia, serif;">Unique Driftwood Creations</h1>
          </div>
          
          <div style="font-size: 15px; line-height: 1.6; color: #1c1c1c; margin-bottom: 30px; white-space: pre-wrap;">${replyMessage}</div>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #d4af37; font-size: 13px; color: #777;">
            <p style="margin: 0; font-weight: bold; color: #555;">Best regards,</p>
            <p style="margin: 4px 0 0 0; font-weight: bold; color: #c05c35; font-size: 14px;">Boniface Chikwenhere</p>
            <p style="margin: 2px 0 0 0;">Unique Driftwood Creations</p>
            <p style="margin: 2px 0 0 0;"><a href="mailto:${adminEmail}" style="color: #c05c35; text-decoration: none;">${adminEmail}</a></p>
          </div>

          <!-- Original Message Context -->
          <div style="margin-top: 40px; padding: 20px; background-color: rgba(0,0,0,0.03); border-left: 3px solid #d4af37; font-size: 13px; color: #666; border-radius: 4px;">
            <p style="margin: 0 0 10px 0; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; color: #888;">--- Original Message ---</p>
            <p style="margin: 0 0 4px 0;"><strong>From:</strong> ${inquiry.name} (${inquiry.email})</p>
            <p style="margin: 0 0 4px 0;"><strong>Subject:</strong> ${inquiry.subject}</p>
            <p style="margin: 0 0 12px 0;"><strong>Received:</strong> (Via contact form)</p>
            <div style="white-space: pre-wrap; line-height: 1.5;">${inquiry.message}</div>
          </div>
        </div>
      `,
    });

    // 4. Mark the original inquiry as read
    await sql`
      UPDATE inquiries 
      SET is_read = TRUE 
      WHERE id = ${inquiryId}
    `;

    return res.status(200).json({ success: true, message: 'Reply sent successfully' });
  } catch (error) {
    console.error('Send reply error:', error);
    return res.status(500).json({ error: 'Failed to send reply email. Please verify SMTP settings.' });
  }
};
