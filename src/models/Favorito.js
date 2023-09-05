const mongoose = require("mongoose");

const favoritosSchema = new mongoose.Schema({
  favorito:{type: mongoose.Schema.Types.ObjectId, ref: "livros", required: true}
}, 
{
  timestamps: true
});

const favoritos = mongoose.model("favoritos", favoritosSchema);

module.exports = favoritos;