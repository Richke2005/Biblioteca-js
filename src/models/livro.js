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
    required: [true, "A editora é obrigatória"],
    //Fazendo um enum (Lista de valores) permitidos 
    enum: {
      values: ["Casa do código, Alura"],
      message:  "A editora '{VALUE}' não é um valor válido"
    }
  },
  numPaginas:{
    type: Number,
    min: [10, "O numero de páginas é muito pequeno, Valor Fornecido: {VALUE}; Permitido: 10 - 5000"],
    max: [5000, "O numero de páginas é muito grande, Valor Fornecido: {VALUE}; Permitido: 10 - 5000"]
  }
});

const livros = mongoose.model("livros", LivrosSchema);

module.exports = livros;