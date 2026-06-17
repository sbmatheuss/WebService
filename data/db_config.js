const knex = require('knex')
const config = require("../knexfile.js")

const isVercel = !!process.env.VERCEL
const hasDB = !!process.env.DATABASE_URL

if (isVercel && !hasDB) {
  console.error('ERRO: DATABASE_URL não configurada. Adicione um banco PostgreSQL nas variáveis de ambiente da Vercel.')
}

const env = hasDB ? 'production' : 'development'
const dbknex = knex(config[env])

module.exports = dbknex
