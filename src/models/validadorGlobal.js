const mongoose = require("mongoose");

mongoose.Schema.Types.String.set("validate", {
  validator: (valor)=> valor.trim() !== ""
  ,
  message: ({path})=> `O campo ${path} foi fornecido(a) em branco`
});

