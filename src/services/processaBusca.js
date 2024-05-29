const { autores } = require("../models/index");

// função de busca importíssima
async function processaBusca(parametros){
  const { editora, titulo, minPag, maxPag, nomeAutor, tema } = parametros;

  let busca = {};

  //const regex = new RegExp(titulo, "i");

  if(editora) busca.editora = {$regex: editora, $options: "i"};
  if(titulo) busca.titulo = { $regex: titulo, $options: "i" };
  if(tema) busca.tema = { $regex: tema, $options: "i" };

  if(minPag || maxPag) busca.numPaginas = {};

  if(minPag) busca.numPaginas.$gte = minPag;
  if(maxPag) busca.numPaginas.$lte = maxPag;

  if(nomeAutor){
    const autor = await autores.findOne({ nome: nomeAutor });
    
    if(autor !== null){
      busca.autor = autor._id;
    }else {
      busca = null;
    }
  
  }
  return busca;
}

module.exports = processaBusca;