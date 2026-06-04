const express = require('express')
const app = express()
const port = 3001
const livros = require('./livros')

app.use(express.json());
app.use('/livros', livros) // identificação da rota e da const(require) associada
app.use(log)

app.get('/', (req, res) => {

})

app.get('/cap12', (req, res) => {
    res.send('<h2>Capítulo 12: Introdução ao Express <h2/>')
})

app.post('/filmes', (req, res) => {

    const {titulo, genero} = req.body
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`)
})


function log (req, res, next){
    console.log(`............... Acessado em ${new Date()}`)
    next();
}


app.get('/transfere', log, (req, res) => {
    res.send("Ok! Valor transferio com sucesso...")
})



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})