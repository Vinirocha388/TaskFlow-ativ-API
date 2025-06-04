import prisma from '../../prisma/client.js';

class TaskModel {
  // Obter todas as tasks
  async findAll(title, status) {

    const where = {};

    if (title) {
      where.title = {
        contains: title
      };
    }

    if (status) {
      where.status = {
        contains: status
      };
    }

    const task = await prisma.task.findMany({where});

    return {
      total: task.length,
      task,
    };
  }

  // Criar uma nova task
  async create(data) {
    const task = await prisma.task.create({
      data,
    });

    return task;
  }
}

export default new TaskModel();