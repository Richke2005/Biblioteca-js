const mongoose = require('mongoose')

const autorSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, require: true},
    nacionalidade: {type: String}
},
{
    versionKey: false
})

const autores = mongoose.model("autores", autorSchema)

module.exports = autores