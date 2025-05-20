import express from "express";

import TaskController from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/", TaskController.findAll);
taskRouter.post("/", TaskController.create);

export default taskRouter;