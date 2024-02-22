/**
 * index.js
 * @description :: index route of platforms
 */

const express = require("express");
const router = express.Router();
const taskRoutes = require("./Tasks/taskRoutes.js");

router.use(taskRoutes);
module.exports = router;
