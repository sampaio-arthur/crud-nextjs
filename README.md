# CRUD em Next.js

## Descrição

Este é um projeto CRUD simples desenvolvido com **Next.js**, **React**, **TypeScript**, **Prisma** e **SQLite**. A aplicação permite a criação, leitura, atualização e exclusão de dados, proporcionando uma interface amigável e interativa para o usuário.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Prisma**: ORM (Object-Relational Mapping) para interação com o banco de dados.
- **SQLite**: Banco de dados leve e fácil de configurar.
- **jsonwebtoken**: Biblioteca para implementar JWT (JSON Web Tokens) para autenticação.

## Funcionalidades

- **Cadastro de Usuários**: Permite aos usuários criar uma conta.
- **Login de Usuários**: Sistema de autenticação com JWT.
- **Dashboard**: Interface para visualizar e gerenciar dados.
- **Efeitos Visuais**: Animações e transições para uma melhor experiência do usuário.

## Instalação

Siga os passos abaixo para instalar e executar o projeto localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/sampaio-arthur/crud-nextjs.git
   cd crud-nextjs

2. **Instale as dependências principais**:

    ```bash
    npm install

3. **Instale o Prisma e SQLite**:

    ```bash
    npm install prisma --save-dev
    npm install @prisma/client
    npm install sqlite3

4. **Instale a biblioteca JWT**:

    ```bash
    npm install jsonwebtoken

5. **Configure o banco de dados**:

    ```bash
    npx prisma generate

6. **Execute as migrações para criar as tabelas no banco de dados**:

    ```bash
    npx prisma migrate dev --name init

7. **Execute as migrações para criar as tabelas no banco de dados**:

    ```bash
    DATABASE_URL="file:./dev.db"
    JWT_SECRET="sua_chave_secreta_aqui"


8. **Execute o projeto**:

    ```bash
    npm run dev