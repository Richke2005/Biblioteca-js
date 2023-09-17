const ErroBase = require("./erroBase");

class PagNaoEncontarada extends ErroBase{
  constructor(menssagem = "Página não encotrada"){
    super(menssagem, 404);
  }
}

module.exports = PagNaoEncontarada;