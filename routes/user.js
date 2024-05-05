const express = require("express");
const router = express.Router();

const {
  userType,
  userDatas,
} = require("../controllers/user-controller.js");


router.get("/userData/:mail", userDatas);
router.get("/type/:mail", userType);

module.exports = router;
