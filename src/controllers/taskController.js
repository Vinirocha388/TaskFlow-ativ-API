import TaskModel from "../models/taskModel.js";

class TaskController {
  async findAll(req, res) {
    const {title, description,status} = req.query;
    const pagina = req.query.pagina || 1;
    const limite = req.query.limite || 10;
    

    try {
      const tasks = await TaskModel.findAll(title, description,status, userId, projectId,pagina, limite);

      return res.status(200).json(tasks);
    } catch (error) {
      console.error("Error finding all tasks", error);
      return res
        .status(500)
        .json({ message: "Error finding all tasks", error });
    }
  }

  async create(req, res) {
    try {
      const { title, description,status,userId,projectId} = req.body;

      // Validação básica
      if (!title|| !description || !status || !userId || !projectId) {
        return res.status(400).json({
          error: "Name, description and status fields are required!",
        });
      }

      const data = {
        title,
        description,
        status,
        userId,
        projectId,
      };

      const newTask = await TaskModel.create(data);

      return res.status(201).json({
        message: "New task successufully created!",
        newTask,
      });
    } catch (error) {
      console.error("Error creating a new task", error);
      res.status(500).json({ error: "Error creating a new task" });
    }
  }
}

export default new TaskController();