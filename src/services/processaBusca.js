
// função de busca importíssima
function processaBusca(parametros){
  const { editora, titulo, minPag, maxPag } = parametros;

  const busca = {};

  //const regex = new RegExp(titulo, "i");

  if(editora) busca.editora = {$regex: editora, $options: "i"};
  if(titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if(minPag || maxPag) busca.numPaginas = {};

  if(minPag) busca.numPaginas.$gte = minPag;
  if(maxPag) busca.numPaginas.$lte = maxPag;

  return busca;
}

module.exports = processaBusca;