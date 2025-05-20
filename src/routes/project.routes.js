import express from "express";

import ProjectController from "../controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.get("/", ProjectController.findAll);
projectRouter.post("/", ProjectController.create);

export default projectRouter;