/**
 * index route file of Task platform.
 * @description: exports all routes of Task platform.
 */
const express = require("express");
const router = express.Router();

router.use(require("./taskRoutes"));

module.exports = router;
