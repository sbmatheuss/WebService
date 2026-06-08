const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 3001
const livros = require('./livros')

app.use(cors())
app.use(express.json());
app.use(log)
app.use('/livros', livros)

// serve os arquivos estáticos do frontend buildado
app.use(express.static(path.join(__dirname, 'front', 'build')))
app.use(express.static('public'))

// rotas auxiliares
app.get('/cap12', (req, res) => {
    res.send('<h2>Capítulo 12: Introdução ao Express <h2/>')
})

app.post('/filmes', (req, res) => {
    const {titulo, genero} = req.body
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`)
})

app.get('/transfere', log, (req, res) => {
    res.send("Ok! Valor transferio com sucesso...")
})

// catch-all: qualquer rota não-API serve o index.html do React
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'))
})

function log (req, res, next){
    console.log(`............... Acessado em ${new Date()}`)
    next();
}

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})