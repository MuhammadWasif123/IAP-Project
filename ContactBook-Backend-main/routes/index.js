import express from "express";
import {
  SignupController,
  LoginController,
  logoutUser,
} from "../controller/authController.js";
import authMiddelwear from "../middlewear/authmiddlewear.js";
import {
  allPostController,
  dashboardValidate,
  delPostController,
  postController,
  searchPostsController,
  updatePostController,
} from "../controller/userController.js";
import upload from "../utils/multer.js";
import {
  accessAllUser,
  adminSignUp,
  deleteUser,
  loginAdmin,
  logoutAdmin,
  updateUser,
  // verifyAdmin,
} from "../controller/admin/admin.controllor.js";

const router = express.Router();

router.post("/api/signup", SignupController);
router.post("/api/login", LoginController);
router.post("/api/logout", logoutUser);

router.post("/api/admin/signup", adminSignUp);
router.post("/api/admin/login", loginAdmin);
router.get("/api/admin/all-users", accessAllUser);
router.put("/api/admin/update-user/:id", updateUser);
router.delete("/api/admin/delete-user/:id", deleteUser);
router.post("/api/admin/logout", logoutAdmin);
// router.post("/api/admin/verify", verifyAdmin);
router.get("/api/dashboardvalidate", authMiddelwear, dashboardValidate);
router.post("/api/post", [authMiddelwear, upload.any("image")], postController);
router.get("/api/allpost", authMiddelwear, allPostController);
router.delete("/api/delpost/:id", authMiddelwear, delPostController);
router.put("/api/updatepost/:id", updatePostController);
router.get("/api/search-posts", authMiddelwear, searchPostsController);
router.post("/api/logout", logoutAdmin);

export default router;
