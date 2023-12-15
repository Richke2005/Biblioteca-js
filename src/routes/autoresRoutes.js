const { Router } = require("express");
const paginar = require("../middlewares/paginar.js");
const AutoresControler  = require("../controlers/autoresControler.js");


const router = Router();

router.get("/autores", AutoresControler.listarAutores, paginar);
router.get("/autores/:id", AutoresControler.listarAutorPorId);
router.post("/autores", AutoresControler.cadastrarAutor);
router.put("/autores/:id", AutoresControler.atualizarAutor);
router.delete("/autores/:id", AutoresControler.excluirAutor);

module.exports = router;