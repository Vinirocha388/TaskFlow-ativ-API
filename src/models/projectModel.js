import prisma from '../../prisma/client.js';

class ProjectModel {
    // Obter todos os recordes
    async findAll() {
      const projects = await prisma.project.findMany();
  
      return {
        total: projectss.length,
        projects,
      };
    }
  
    // Criar um novo record
    async create(data) {
      const record = await prisma.project.create({
        data,
      });
  
      return project;
    }
  }
  
  export default new ProjectModel();