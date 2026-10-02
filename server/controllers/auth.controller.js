import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const cookieOptions = {
  httpOnly: true,
  secure: true, // required for SameSite=None
  sameSite: "none", // required for cross-site cookies
};

export const googleAuth = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, avatar });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      ...cookieOptions,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `google auth error ${error}` });
  }
};

export const logOut = async (req, res) => {
  try {
    // attributes must match the ones used in res.cookie, or the browser won't clear it
    res.clearCookie("token", cookieOptions);
    return res.status(200).json({ message: "log out successfully" });
  } catch (error) {
    return res.status(500).json({ message: `log out error ${error}` });
  }
};
