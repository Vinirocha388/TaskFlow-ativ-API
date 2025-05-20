import TaskModel from "../models/gameModel.js";

class TaskController {
  async findAll(req, res) {
    const {name, description,status} = req.query;
    
   // console.log("Nome: ", name);
   // console.log("Plataforma: ", platform);

    try {
      const tasks = await TaskModel.findAll(name, description,status);

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
      const { name, description,status} = req.body;

      // Validação básica
      if (!name || !description || !status) {
        return res.status(400).json({
          error: "Name, description and status fields are required!",
        });
      }

      const data = {
        name,
        description,
        status
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