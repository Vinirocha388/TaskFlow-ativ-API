import ProjectModel from "../models/projectModel.js";

class ProjectController {
  async findAll(req, res) {
    try {
      const projects = await ProjectModel.findAll();

      return res.status(200).json(projects);
    } catch (error) {
      console.error("Error finding all projects", error);
      return res
        .status(500)
        .json({ message: "Error finding all projects", error });
    }
  }

  async create(req, res) {
    try {
      const { name, description,status, userId, gameId } = req.body;

      // Validação básica
      if (!name || !description ||status || !userId || !taskId) {
        return res.status(400).json({
          error: "name, description,status , userId and gameId fields are required!",
        });
      }

      const data = {
        name,
        description,
        status,
        userId,
        gameId,
      };

      const newProject = await ProjectModel.create(data);

      return res.status(201).json({
        message: "New project successufully created!",
        newRecord,
      });
    } catch (error) {
      console.error("Error creating a new project", error);
      res.status(500).json({ error: "Error creating a new project" });
    }
  }
}

export default new ProjectController();