const ErroBase = require("./erroBase");

class RequisicaoIncorreta extends ErroBase{
  constructor(menssagem = "Um ou mais dados fornecidos estão incorretos"){
    super(menssagem, 400);
  }
}

module.exports = RequisicaoIncorreta;