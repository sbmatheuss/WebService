# WebService - Catálogo de Livros

Aplicação fullstack para cadastro e gerenciamento de livros com **Express + SQLite3** no backend e **React** no frontend.

## Tecnologias

**Backend** | **Frontend**
---|---
Express 5 | React 19
Knex 3 | React Router 6
SQLite3 | Axios
CORS | react-google-charts
Nodemon (dev) | react-hook-form

## Estrutura

```
WebService/
├── app.js              # Servidor Express (porta 3001)
├── livros.js           # Rotas da API /livros
├── knexfile.js         # Configuração do Knex
├── data/
│   ├── db_config.js    # Conexão com SQLite
│   ├── editora.db3     # Banco de dados
│   └── seeds/          # Dados iniciais
├── migrations/         # Schema da tabela livros
├── public/capas/       # Imagens das capas
└── front/              # Aplicação React
    └── src/
        ├── App.js
        ├── config_axios.js
        └── components/
            ├── InclusaoLivros.js   # Cadastro
            ├── ManutencaoLivro.js  # Listagem/CRUD
            ├── ItemLista.js        # Linha da tabela
            └── ResumoLivros.js     # Gráficos
```

## Como rodar

### Produção (tudo em uma única porta)

```bash
npm install
cd front && npm install && cd ..
npx knex migrate:latest
npx knex seed:run
npm start
```

Acesse em `http://localhost:3001` — frontend + API na mesma porta.

### Desenvolvimento (hot reload)

```bash
npm install
cd front && npm install && cd ..
npx knex migrate:latest
npx knex seed:run
npm run dev
```

- Backend com `nodemon` (auto-restart) em `http://localhost:3001`
- Frontend React com hot reload em `http://localhost:3000` (proxy automático para API)

## API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/livros` | Lista todos os livros |
| POST | `/livros` | Cadastra um livro |
| PUT | `/livros/:id` | Altera o preço |
| DELETE | `/livros/:id` | Exclui um livro |
| GET | `/livros/filtro/:palavra` | Busca por título ou autor |
| GET | `/livros/dados/resumo` | Estatísticas (total, média, etc.) |
| GET | `/livros/dados/grafico` | Total por ano |

## Banco de dados

SQLite3 com tabela `livros`:

| Campo | Tipo |
|-------|------|
| id | INTEGER (auto incremento) |
| titulo | VARCHAR(80) |
| autor | VARCHAR(60) |
| ano | INTEGER |
| preco | DECIMAL(9,2) |
| foto | VARCHAR(100) |
