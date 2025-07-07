import { Admin } from "../../model/adminSchema.js";
import CrudModel from "../../model/crudSchema.js";
import UserModel from "../../model/userSchema.js";
import jwt from "jsonwebtoken";

const adminSignUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);
  if (!name || !email || !password || !confirmPassword) {
    return res.status(404).json({
      message: "ALL feilds are required",
    });
  }
  if (password != confirmPassword) {
    return res.status(402).json({
      message: "Not match",
    });
  }
  const exiistedAdmin = await Admin.findOne({
    email: email,
  });
  if (exiistedAdmin) {
    return res.status(400).json({
      message: "Admin Already Existed",
    });
  }

  const CreatedAdmin = await Admin.create({
    name,
    email,
    password,
  });

  if (!CreatedAdmin) {
    return res.status(500).json({
      message: "Somthing Wnt Wrong while register the Admin",
    });
  }
  const admin = await Admin.findById(CreatedAdmin._id).select("-password");

  return res.status(201).json({
    message: "Admin Registered",
    data: admin,
  });
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "both Feilds are Required",
    });
  }
  const admin = await Admin.findOne({
    email: email,
  });
  if (!admin) {
    return res.status(400).json({
      message: "Admin Not Found",
    });
  }

  const isPasswordCorrect = await admin.comparePassword(password);

  if (!isPasswordCorrect) {
    return res.status(400).json({
      message: "Wrong Credentials",
    });
  }

  const adminToken = await admin.generateToken();
  if (!adminToken) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  const options = {
    httpOnly: false,
    secure: true,
    // sameSite: "Lax",
    // path: "/",
  };
  return res.status(200).cookie("adminToken", adminToken, options).json({
    message: "Admin logedin successfully",
  });
};

const accessAllUser = async (_, res) => {
  const allUser = await UserModel.find().select("-password -cpassword").lean();
  if (!allUser) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  for (let i = 0; i < allUser.length; i++) {
    let contacts = await CrudModel.find({
      verifyUserId: allUser[i]._id,
    });
    allUser[i].Contacts = contacts;
  }
  return res.status(200).json({
    message: "All User Fetched SuccessFully",
    data: allUser,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const userUpdated = await UserModel.findByIdAndUpdate(id, updateData, {
    new: true,
  }).select("-password");

  if (!userUpdated) {
    return res.status(500).json({
      message: "internal server Error",
    });
  }
  return res.status(200).json({
    message: "contact updated successfully",
    data: userUpdated,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (id == null) {
    return res.status(400).json({
      message: "Id is required",
    });
  }
  const userDeleted = await UserModel.findByIdAndDelete(id);
  if (!userDeleted) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  return res.status(200).json({
    message: "User Deleted Successfully",
  });
};
const logoutAdmin = async (_, res) => {
  const options = {
    httpOnly: false,
    secure: true,
  };
  return res.status(200).clearCookie("adminToken", options).json({
    message: "Logout Admin SuccessFully",
  });
};

// const verifyAdmin = async (req, res, next) => {
//   const { token } = req.cookies;
//   console.log(token);
//   try {
//     const decodedToken = jwt.verify(token, process.env.ADMIN_SEC_KEY);
//     return res.status(200).json({
//       meeesage: "Verified Successfully",
//       success: true,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: error.message,
//       success: false,
//     });
//   }
// };

export {
  adminSignUp,
  loginAdmin,
  accessAllUser,
  updateUser,
  deleteUser,
  logoutAdmin,
  // verifyAdmin,
};
