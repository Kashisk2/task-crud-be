/**
 * taskRoutes.js
 * @description :: CRUD API routes for taskRoutes
 */
const express = require("express");
const router = express.Router();
const taskController = require("../../controllers/TaskController/taskController");
const taskValidation = require("../../utils/validation/taskValidation");
const validateRequestMiddleware = require("../../middleware/validationMiddleWare");

router.route("/task/list").get(taskController.getAllTask);
router.route("/task/:id").get(taskController.getTaskById);
router.route("/task").post(validateRequestMiddleware(taskValidation.schemaKeys),taskController.createTask);
router.route("/task/:id").patch(validateRequestMiddleware(taskValidation.updateSchemaKeys),taskController.updateTask);
router.route("/task/:id").delete(taskController.deleteTask);

module.exports = router;
