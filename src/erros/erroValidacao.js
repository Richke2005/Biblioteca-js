const RequisicaoIncorreta = require("./requisiçãoIncorreta");

class ErroValidacao extends RequisicaoIncorreta{
  constructor(err){
    const menssagemDeErro = Object.values(err.errors)
      .map(err => err.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${menssagemDeErro}`);
  }
}

module.exports = ErroValidacao;