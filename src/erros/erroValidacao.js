const RequisicaoIncorreta = require("./requisiçãoIncorreta");

class ErroValidacao extends RequisicaoIncorreta{
  //Faz a ligação com erros do mongoose
  constructor(err){
    const menssagemDeErro = Object.values(err.errors)
      .map(err => err.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${menssagemDeErro}`);
  }
}

module.exports = ErroValidacao;