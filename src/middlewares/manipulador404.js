const PagNaoEncontarada = require("../erros/erroPagNaoEncontrada");

function manipulador404(req, res, next){
  const erro404 = new PagNaoEncontarada;
  next(erro404);
  //"res" acima encaminha ao manipuladorDeErros
}

module.exports = manipulador404;