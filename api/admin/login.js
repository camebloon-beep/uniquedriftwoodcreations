const jwt = require('jsonwebtoken');
const { setCorsHeaders } = require('../_utils/auth');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const allowedEmail = process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER || 'camebloon@gmail.com';
  if (email.toLowerCase() !== allowedEmail.toLowerCase()) {
    return res.status(401).json({ error: 'Invalid admin email address' });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  try {
    const token = jwt.sign(
      { role: 'admin', email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Authentication failed' });
  }
};
