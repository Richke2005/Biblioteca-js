const express = require('express');
const rotaRoupas = require('./routes/index')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors({origin: "*"}))

app.use('/roupas', rotaRoupas)

const port = 8000

app.listen(port)