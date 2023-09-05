const { Router } = require("express");
const FavoritosControler = require("../controlers/favoritosControler");

const router = Router();

router.get("/favoritos", FavoritosControler.listarFavorito);
router.post("/favoritos/:id", FavoritosControler.cadastrarFavoritoById);
router.delete("/favoritos/:id", FavoritosControler.excluirFavoritoById);

module.exports = router;