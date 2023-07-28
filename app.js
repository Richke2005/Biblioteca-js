const express = require('express');
const rotaRoupas = require('./routes/index')

const app = express()
app.use(express.json())

app.use('/roupas', rotaRoupas)

const port = 8000

app.listen(port)