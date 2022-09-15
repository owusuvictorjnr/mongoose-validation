const jwt = require('jsonwebtoken');

exports.authRequired = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(402).json({ error: 'Please login' });
  }

  const token = (authorix = zation.split(' ')[1]);
  if (!token) {
    return res.status(402).json({ error: 'Plese provide a valid auth' });
  }

  const user = jwt.verify(
    token,
    '25176c6d8567c07090a5692e566a931ef3d5e5655dc0fb09d82172a056887c0a'
  );
  next();
};
