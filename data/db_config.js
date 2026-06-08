const knex = require('knex')
const config = require("../knexfile.js")

const env = process.env.DATABASE_URL ? 'production' : 'development'
const dbknex = knex(config[env])

module.exports = dbknex

