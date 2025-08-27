const SignUpModel = require('../models/SignUp');
const bcrypt = require('bcrypt');

const SignUP = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. Check if user already exists
    const exists = await SignUpModel.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // 2. Hash password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      console.error("Error while encrypting password:", err);
      return res.status(500).json({
        success: false,
        message: "Error while encrypting password",
      });
    }

    // 3. Create user with hashed password
    const newUser = await SignUpModel.create({
      Name: name, // Model me "Name" hai, case sensitive
      email,
      password: hashedPassword,
      role,
    });

    // 4. Success response
    return res.status(201).json({
      success: true,
      message: "Profile created successfully",
      user: {
        id: newUser._id,
        name: newUser.Name,
        email: newUser.email,
        role: newUser.role,
      },
    });

  } catch (e) {
    console.error("Error while creating signup page:", e);
    return res.status(500).json({
      success: false,
      message: "Error while creating signup page",
    });
  }
};

module.exports = SignUP;
