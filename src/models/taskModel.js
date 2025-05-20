import prisma from '../../prisma/client.js';

class TaskModel {
  // Obter todas as tasks
  async findAll(name, role) {

    const where = {};

    if (name) {
      where.name = {
        contains: name
      };
    }

    if (role) {
      where.role = {
        contains: role
      };
    }

    const games = await prisma.task.findMany({where});

    return {
      total: task.length,
      task,
    };
  }

  // Criar um novo jogo
  async create(data) {
    const task = await prisma.task.create({
      data,
    });

    return task;
  }
}

export default new TaskModel();