require('dotenv').config();

exports.checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey) {
    return res.status(403).json({ error: 'Access denied. API key is missing.' });
  }

  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(403).json({ error: 'Access denied. Invalid API key.' });
  }

  next();  // Proceed to the next middleware or route handler
};
