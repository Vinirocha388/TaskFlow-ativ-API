# API - TaskFlow 

🎯  **Habilidades Trabalhadas:**

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


