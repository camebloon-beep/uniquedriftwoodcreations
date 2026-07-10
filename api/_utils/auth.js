const jwt = require('jsonwebtoken');

/**
 * Verifies a JWT token from the Authorization header.
 * Expected format: "Bearer <token>"
 * @param {Object} req - The request object
 * @returns {boolean} - True if the token is valid
 */
function verifyToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return false;
  try {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Sets CORS headers on the response to allow cross-origin requests.
 * @param {Object} res - The response object
 */
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

module.exports = { verifyToken, setCorsHeaders };
