# Auto Vitrine API 🚗

Esta API foi desenvolvida para gerenciar o inventário e a exibição de veículos de uma vitrine automotiva. O projeto foi inspirado nas funcionalidades e no catálogo de seminovos da [Comasa](https://www.comasa.com.br/seminovos), oferecendo uma estrutura robusta para listagem, filtragem e gestão de automóveis.

---

## 📝 Resumo
O **Auto Vitrine API** é o motor de backend para uma plataforma de compra e venda de veículos. Ele permite o gerenciamento completo de estoque (CRUD), validação de dados com Zod e autenticação segura de usuários. A arquitetura foi pensada para ser escalável e fácil de manter, utilizando as melhores práticas de desenvolvimento Node.js.

## 🛠️ Tecnologias
As principais tecnologias e bibliotecas utilizadas no projeto são:

* **Node.js**: Ambiente de execução Javascript.
* **Express**: Framework web para criação de rotas e middlewares.
* **Sequelize & Sequelize-CLI**: ORM para comunicação com banco de dados e gerenciamento de migrations.
* **Zod**: Validação de esquemas e tipos de dados.
* **JWT & Bcryptjs**: Gerenciamento de tokens de acesso e criptografia de senhas.
* **SQLite3 / PostgreSQL**: Suporte a bancos de dados relacionais.
* **Prettier**: Padronização de formatação de código.

---

## 🚀 Como Instalar e Executar

### 1. Pré-requisitos
* Node.js (versão 18 ou superior recomendada).
* Gerenciador de pacotes NPM (que já vem com o Node).

### 2. Instalação
```bash
# Clone o repositório
git clone [https://github.com/viniciussommacal/auto-vitrine-api.git](https://github.com/viniciussommacal/auto-vitrine-api.git)

# Entre no diretório
cd auto-vitrine-api

# Instale as dependências
npm install

# execute o setup (migrations + seeders)
npm run setup

# execute projeto
npm run dev