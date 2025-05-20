# API - TaskFlow 

## 📖 Contextualização
A empresa "TaskFlow" está desenvolvendo uma plataforma de gerenciamento de projetos que permite que equipes organizem tarefas, acompanhem prazos e colaborem em tempo real. Você foi contratado como desenvolvedor back-end para criar uma API que gerenciará o cadastro de usuários, projetos, tarefas e equipes.

A plataforma precisa permitir que gerentes de projeto criem e organizem projetos, definam tarefas com prazos, atribuam responsáveis e acompanhem o progresso. Os membros da equipe devem poder visualizar suas tarefas, atualizar status, adicionar comentários e colaborar com outros membros. O sistema também deve permitir a criação de relatórios de desempenho e o acompanhamento de tempo gasto nas tarefas.

## 🏹 Desafio
Desenvolver uma API RESTful utilizando Node.js, Express e Prisma que permita:

1. Gerenciar usuários (registro e autenticação)
2. Gerenciar projetos e equipes
3. Gerenciar tarefas e subtarefas
4. Gerenciar comentários e anexos
5. Implementar funcionalidade de relatórios e dashboards


## 🎯 Habilidades Trabalhadas:

- Desenvolvimento de APIs RESTful com Node.js
- Integração de ORM (Prisma) com projetos backend

## 📑 Pré-requisitos

- Node.js instalado (versão 18 ou superior)
- Um editor de código (VS Code recomendado)
- Conhecimentos básicos de JavaScript e Node.js

## Vamos começar!

 ### ✅ Passo 1: Inicializar o projeto

Crie uma pasta para o projeto e inicialize:

```bash
mkdir taskflow-ativ-api
cd taskflow-ativ-api
npm init
```

 ### ✅ Passo 2: Instalar dependências

```bash
npm install express nodemon dotenv
```

 ### ✅ Passo 3: configurar .env
```bash
PORT= porta utilizada
DATABASE_URL="caminho do banco"
JWT="senha de proteção"
```


### ✅ Passo 4: Regenerar o banco de dados
```bash
npx prisma migrate dev
```

### ✅ Passo 5: Inicializar o projeto
```bash
npm run dev
```


