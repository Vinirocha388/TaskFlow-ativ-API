import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import taskRouter from "./task.routes.js";
import projectRouter from "./project.routes.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);


// Rotas protegidas
router.use(authMiddleware);
router.use("/tasks", taskRouter);
router.use("/projects", projectRouter);
export default router;