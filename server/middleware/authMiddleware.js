import jwt from "jsonwebtoken";
import Company from "../models/Company.js";

export const protectCompany = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.json({ success: false, msg: "Unauthorized, Login Again" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.company = await Company.findById(decodedToken.id).select("-password");

    next();
  } catch (error) {
    return res.json({ success: false, msg: error.message });
  }
};
