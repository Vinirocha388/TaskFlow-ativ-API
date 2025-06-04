import prisma from '../../prisma/client.js';

class ProjectModel {
    // Obter todos os project
    async findAll() {
      const projects = await prisma.project.findMany();
  
      return {
        total: projects.length,
        projects,
      };
    }
  
    // Criar um novo projeto
    async create(data) {
      const project = await prisma.project.create({
        data,
      });
  
      return project;
    }
  }
  
  export default new ProjectModel();