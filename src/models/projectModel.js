import prisma from '../../prisma/client.js';

class ProjectModel {
    // Obter todos os recordes
    async findAll() {
      const projects = await prisma.project.findMany();
  
      return {
        total: projects.length,
        projects,
      };
    }
  
    // Criar um novo record
    async create(data) {
      const project = await prisma.project.create({
        data,
      });
  
      return project;
    }
  }
  
  export default new ProjectModel();