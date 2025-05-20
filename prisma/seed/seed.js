import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

await prisma.tasks.deleteMany({});
await prisma.project.deleteMany({});


  // Criação de Projetos
  const projetosEscolares = await prisma.project.create({
    data: {
      name: "Projeto final Senai ",
      description: "Projeto final do SENAI do Curso de Desenvolvimento de sistemas do 1° semestre",
      status: "andamento",
    },
  });

  const projetosPessoais = await prisma.project.create({
    data: {
      name: "Newpack",
      description: "Projeto de implementação de sistema de compras na empresa Newpack Cortes Vinco",
      releaseYear: "Finalizado",
    },
  });

  console.log("Projetos criados. Inserindo tasks...");

  // Tasks para projetos Escolares
  const peTasks = await Promise.all([
    prisma.tasks.create({
      data: {
        title: "Criar back-end",
        description: "Criação da API de proetos Body&Healthy",
        status: "Em progresso"
      },
    }),
    prisma.tasks.create({
      data: {
        title: "Criação de slides",
        description: "Criação de slides para a apresentação do projeto final",
        status: "Pendente"
      },
    }),
  ]);

  // Tasks para projetos pessoais
  const proPe = await Promise.all([
    prisma.task.create({
      data: {
        title: "Refatoração de código Paulão Caçambas",
        description: "Atualização de código para implementação de serviços google",
        status: "Finalizado"
      },
    }),
    prisma.task.create({
      data: {
        title: "Criação de sistema",
        description: "Criar sistema web para a empresa na qual mostra informações sobre o app desenvolvido",
        status: "Em andamento"
      },
    }),
  ]);

  console.log(
    `Seed concluído! Criadas ${await prisma.project.count()} projetos e ${await prisma.task.count()} tasks .`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });