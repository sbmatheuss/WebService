const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 3001
const livros = require('./livros')

app.use(cors())
app.use(express.json());
app.use(log)
app.use('/livros', livros)

const frontBuild = path.join(__dirname, 'front', 'build')
if (fs.existsSync(frontBuild)) {
    app.use(express.static(frontBuild))
}
app.use(express.static('public'))

// catch-all: qualquer rota não-API serve o index.html do React
app.use((req, res) => {
    const indexHtml = path.join(frontBuild, 'index.html')
    if (fs.existsSync(indexHtml)) {
        res.sendFile(indexHtml)
    } else {
        res.status(200).send(`
            <h1>API de Livros</h1>
            <p>Servidor rodando.</p>
            <p>Para acessar o frontend, execute <code>npm start</code> na raiz do projeto.</p>
        `)
    }
})

// tratador de erros global
app.use((err, req, res, next) => {
    console.error('ERRO:', err.message)
    res.status(500).json({ msg: err.message })
})

function log (req, res, next){
    console.log(`${req.method} ${req.url} em ${new Date().toLocaleString('pt-BR')}`)
    next();
}

module.exports = app

if (!process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
    })
}