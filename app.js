const express = require('express');
const rotaRoupas = require('./routes/index')
const rotaFavorito = require('./routes/favorito')

const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors({origin: "http://localhost:3000"}))

app.use('/roupas', rotaRoupas)
app.use('/favoritos', rotaFavorito)

const port = 8000

app.listen(port)