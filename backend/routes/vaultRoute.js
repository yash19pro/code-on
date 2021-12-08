const express = require("express");
const {
  getAllCodeFiles,
  createCode,
  deleteCode,
  updateFile,
} = require("../controllers/vaultController");
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/allCodeFiles").get(getAllCodeFiles);
router
  .route("/createCode")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createCode);
router
  .route("/deleteCode/:id")
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteCode);
router
  .route("/updateFile/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateFile);

module.exports = router;
