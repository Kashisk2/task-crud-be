const { default: axios } = require("axios");
const config = require("../../config");
/**
 * taskController.js
 * @description :: exports action methods for task.
 */
const axiosClint = axios.create({
  baseURL: config.config.db_api,
});
/**
 * @description ::for get all task.
 */
const getAllTask = async (req, res) => {
  try {
    const response = await axiosClint.get("/task");
    res.send({
      data: response.data,
      message: "Task Got Successfull",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @description ::for get task by id.
 */

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axiosClint.get(`/task/${id}`);

    res.send({
      data: response.data,
      message: "Task Deleted Successfull",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @description ::for create task.
 */

const createTask = async (req, res) => {
  try {
    const data = req.body;
    const response = await axiosClint.post("/task", data);
    res.send({
      message: "Task Created Successfull",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @description ::for update task by id.
 */

const updateTask = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const response = await axiosClint.patch(`/task/${id}`, data);
    res.send({
      message: "Task Updated Successfull",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @description ::for delete task by id.
 */

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axiosClint.delete(`/task/${id}`);
    res.send({
      message: "Task Deleted Successfull",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
