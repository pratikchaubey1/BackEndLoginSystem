require('dotenv').config();
const jwt = require('jsonwebtoken');

const autho = (req, res, next) => {
  try {
    const token = req.body.token || req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token invalid",
      });
    }

    const decode = jwt.verify(token, process.env.Prab_key);
    console.log(decode);
    req.user = decode;

    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = autho;