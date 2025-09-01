const loginSchema = require("../models/SignUp");
const bcrypt = require("bcrypt");

const LoginData = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await loginSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

   
    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      payload,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = LoginData;
