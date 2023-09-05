const mongoose = require("mongoose");

const LivrosSchema = new mongoose.Schema({
  id:{type: String},
  titulo:{
    type: String,
    required: [true, "O titulo do livro é obrigatório"]
  },
  autor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O autor é obrigatório"]
  },
  editora:{type: String,
    required: [true, "A editora é obrigatória"]
  },
  numPaginas:{type: Number}
});

const livros = mongoose.model("livros", LivrosSchema);

module.exports = livros;