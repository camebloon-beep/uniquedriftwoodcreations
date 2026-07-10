const { sql } = require('@vercel/postgres');
const { setCorsHeaders } = require('./_utils/auth');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { rows } = await sql`SELECT id, status FROM sculptures`;
    return res.status(200).json(rows);
  } catch (error) {
    // If the table doesn't exist yet or any DB error, return empty array
    // This allows the frontend to work gracefully before DB setup
    console.error('Sculptures fetch error:', error.message);
    return res.status(200).json([]);
  }
};
