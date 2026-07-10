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
    // PATCH: Toggle sculpture availability status
    if (req.method === 'PATCH') {
      const { id, status } = req.body || {};

      if (!id || !status) {
        return res.status(400).json({ error: 'id and status are required' });
      }

      if (status !== 'available' && status !== 'sold') {
        return res.status(400).json({ error: 'Status must be "available" or "sold"' });
      }

      // Upsert: insert if sculpture doesn't exist in DB yet, update if it does
      await sql`
        INSERT INTO sculptures (id, status, updated_at) 
        VALUES (${id}, ${status}, NOW())
        ON CONFLICT (id) DO UPDATE 
        SET status = ${status}, updated_at = NOW()
      `;

      return res.status(200).json({ success: true });
    }

    // GET: List all sculpture statuses
    if (req.method === 'GET') {
      const { rows } = await sql`SELECT id, status, updated_at FROM sculptures ORDER BY id`;
      return res.status(200).json(rows);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Admin sculptures error:', error);
    return res.status(500).json({ error: 'Database operation failed' });
  }
};
