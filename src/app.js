const express = require('express')
const routes = require('./routes/index')
require('./config/dbConnect')
const cors = require('cors')

const app = express()

app.use(cors({origin: 'http://localhost:3000'}))

routes(app)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`API escutando em http://localhost:${port}`)
})