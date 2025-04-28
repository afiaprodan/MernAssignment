// src/controllers/userController.js
exports.createUser = (req, res) => {
  res.json({ message: "User created successfully" });
};

exports.readUser = (req, res) => {
  res.json({ message: "User read successfully" });
};

exports.updateUser = (req, res) => {
  res.json({ message: "User updated successfully" });
};

exports.deleteUser = (req, res) => {
  res.json({ message: "User deleted successfully" });
};

exports.getAllUsers = (req, res) => {
  res.json({ message: "All users fetched successfully" });
};

exports.getUserById = (req, res) => {
  res.json({ message: "User fetched by ID" });
};

exports.loginUser = (req, res) => {
  res.json({ message: "User login successful" });
};

exports.logoutUser = (req, res) => {
  res.json({ message: "User logout successful" });
};

exports.changePassword = (req, res) => {
  res.json({ message: "Password changed successfully" });
};

exports.updateProfile = (req, res) => {
  res.json({ message: "User profile updated successfully" });
};

exports.makeAdmin = (req, res) => {
  res.json({ message: "User made admin successfully" });
};

exports.removeAdmin = (req, res) => {
  res.json({ message: "Admin role removed successfully" });
};

exports.searchUsers = (req, res) => {
  res.json({ message: "User search completed successfully" });
};

exports.filterUsers = (req, res) => {
  res.json({ message: "User filter completed successfully" });
};

exports.blockUser = (req, res) => {
  res.json({ message: "User blocked successfully" });
};

exports.unblockUser = (req, res) => {
  res.json({ message: "User unblocked successfully" });
};

exports.verifyEmail = (req, res) => {
  res.json({ message: "Email verified successfully" });
};

exports.resendVerification = (req, res) => {
  res.json({ message: "Verification email resent" });
};

exports.uploadProfilePicture = (req, res) => {
  res.json({ message: "Profile picture uploaded successfully" });
};

exports.deleteAccount = (req, res) => {
  res.json({ message: "Account deleted successfully" });
};
//src/routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CRUD
router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser);
router.put("/update-user", userController.updateUser);
router.delete("/delete-user", userController.deleteUser);

// User Management
router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.put("/change-password", userController.changePassword);
router.put("/update-profile", userController.updateProfile);
router.put("/make-admin/:id", userController.makeAdmin);
router.put("/remove-admin/:id", userController.removeAdmin);

// Search & Filter
router.get("/search", userController.searchUsers);
router.get("/filter", userController.filterUsers);

// Block & Unblock
router.patch("/block-user/:id", userController.blockUser);
router.patch("/unblock-user/:id", userController.unblockUser);

// Email Verification
router.post("/verify-email", userController.verifyEmail);
router.post("/resend-verification", userController.resendVerification);

// Profile Picture
router.post("/upload-profile-picture", userController.uploadProfilePicture);

// Delete Account
router.delete("/delete-account", userController.deleteAccount);

module.exports = router;
//src/app.js

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/users", userRoutes);

module.exports = app;
4.// src/server.js
const app = require("./app");
const dotenv = require("dotenv");

// Load env variables
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
