const autopopulate = require("mongoose-autopopulate");
const mongoose = require("mongoose");

const LivrosSchema = new mongoose.Schema({
  id:{type: String},
  titulo:{
    type: String,
    required: [true, "O titulo do livro é obrigatório"]
  },
  tema: {
    type: String,
    required: [true, "Tema do livro é obrigatório"]
  },
  autor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O autor é obrigatório"],
    autopopulate: {select: "nome"}// (true)autopopulate para popular os autores na requisição
  },
  editora:{
    type: String,
    required: [true, "A editora é obrigatória"],
    //Fazendo um enum (Lista de valores) permitidos 
    enum: {
      values: ["Casa do código", "Alura", "Casa publicadora brasileira"],
      message:  "A editora '{VALUE}' não é um valor válido"
    }
  },
  img: {
    type: String,
    required: [true, "A imagem do livro é obrigatória"]
  },
  url: {
    type: String,
    required: [true, "A url do livro é obrigatória"]
  },
  numPaginas:{
    type: Number,
    //min: [10, "O numero de páginas é muito pequeno, Valor Fornecido: {VALUE}; Permitido: 10 - 5000"],
    //max: [5000, "O numero de páginas é muito grande, Valor Fornecido: {VALUE}; Permitido: 10 - 5000"]
    validate: {
      validator: (valor)=>{
        return valor >=10 && valor<=5000;
      },
      message: "O numero de páginas deve estar entre 10 e 5000. Valor fornecido {VALUE}"
    }
  }
});

LivrosSchema.plugin(autopopulate);

const livros = mongoose.model("livros", LivrosSchema);

module.exports = livros;