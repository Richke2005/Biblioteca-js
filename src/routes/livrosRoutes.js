const { Router } = require("express");
const paginar = require("../middlewares/paginar");
const LivrosControler = require("../controlers/livrosControler");


const router = Router();
//mais específica para menos específica
router
    .get("/livros", LivrosControler.listarLivros, paginar)
    .get("/livros/busca", LivrosControler.listarLivroPorFiltro, paginar)
    .get("/livros/:id", LivrosControler.listarLivrosPorId)
    .post("/livros", LivrosControler.cadastrarLivro)
    .put("/livros/:id", LivrosControler.atualizarLivro)
    .delete("/livros/:id", LivrosControler.excluirLivro);
    
module.exports = router;