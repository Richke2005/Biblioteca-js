const { default: mongoose } = require("mongoose");
const ErroBase = require("../erros/erroBase");
const RequisicaoIncorreta = require("../erros/requisiçãoIncorreta");
const ErroValidacao = require("../erros/erroValidacao");

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(err, req, res, next){
  //middleware: middlewares são funções que interceptão requisições da api e tratam da forma correta
  if(err instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarResposta(res);
  } else if(err instanceof mongoose.Error.ValidationError){
    new ErroValidacao(err).enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
       
}

module.exports = manipuladorDeErros;