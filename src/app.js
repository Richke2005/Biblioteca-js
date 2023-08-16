const express = require('express');
const rotaLivros = require('../routes/index')
const rotaFavorito = require('../routes/favorito')
const dbConn = require("./config/dbConnect")


dbConn.on("error", () => {
    console.error("erro ao conectar no banco")
})

dbConn.on("open", () => {
    console.log("Conectado ao banco com sucesso")
})

const cors = require('cors');

const app = express()

app.use(express.json())

app.use(cors({origin: "http://localhost:3000"}))

app.use('/livros', rotaLivros)
app.use('/favoritos', rotaFavorito)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`servidor escutando em http://localhost:${port}`)
})