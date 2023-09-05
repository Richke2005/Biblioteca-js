const { Router } = require("express");
const LivrosControler = require("../controlers/livrosControler");

const router = Router();
//mais específica para menos específica
router.get("/livros", LivrosControler.listarLivros);
router.get("/livros/busca", LivrosControler.listarLivroPorEditora);
router.get("/livros/:id", LivrosControler.listarLivrosPorId);
router.post("/livros", LivrosControler.cadastrarLivro);
router.put("/livros/:id", LivrosControler.atualizarLivro);
router.delete("/livros/:id", LivrosControler.excluirLivro);
module.exports = router;