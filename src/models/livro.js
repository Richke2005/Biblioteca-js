const mongoose = require('mongoose')

const LivrosSchema = new mongoose.Schema({
    id:{type: String},
    titulo:{type: String, required: true},
    autor:{type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora:{type: String, required: true},
    numPaginas:{type: Number}
})

const livros = mongoose.model('livros', LivrosSchema)

module.exports = livros