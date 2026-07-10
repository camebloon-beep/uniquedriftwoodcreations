const { sql } = require('@vercel/postgres');
const { verifyToken, setCorsHeaders } = require('../_utils/auth');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Verify admin authentication
  if (!verifyToken(req)) {
    return res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }

  try {
    // GET: List all inquiries
    if (req.method === 'GET') {
      const { rows } = await sql`
        SELECT id, name, email, subject, message, is_read, created_at
        FROM inquiries 
        ORDER BY created_at DESC
      `;
      return res.status(200).json(rows);
    }

    // PATCH: Toggle read/unread status
    if (req.method === 'PATCH') {
      const { id, is_read } = req.body || {};

      if (id === undefined || is_read === undefined) {
        return res.status(400).json({ error: 'id and is_read are required' });
      }

      await sql`
        UPDATE inquiries 
        SET is_read = ${is_read} 
        WHERE id = ${id}
      `;

      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Admin inquiries error:', error);
    return res.status(500).json({ error: 'Database operation failed' });
  }
};
