import jwt from "jsonwebtoken";
import UserModel from "../model/userSchema.js";

const authMiddelwear = async (req, res, next) => {
  try {
    const token =
      req.cookies.userToken || req.headers["authorization"].split(" ")[1];
    // console.log(token);
    // console.log(process.env.SEC_KEY);
    const verifyToken = jwt.verify(token, process.env.SEC_KEY);
    // console.log("Verify", verifyToken);
    const verifyuserdata = await UserModel.findOne({
      email: verifyToken.email,
    });

    const verifyuserId = verifyuserdata._id;
    // console.log("verifyId", verifyuserdata);
    req.verifyuserId = verifyToken._id;
    req.userData = verifyuserdata;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({
      status: 401,
      message: "Unauthorized",
      data: "null",
    });
  }
};

export default authMiddelwear;
