const livros = require("../models/Livro");

class LivrosControler{
  static listarLivros = async(req, res, next) => {
    try{
      const livrosDaAPI = await livros.find()
        .populate("autor")
        .exec();
                
      res.status(200).send(livrosDaAPI);
    }catch(err){
      next(err);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try{
      const livroNovo = new livros(req.body);
      await livroNovo.save();
      res.status(201).send(`document: ${livroNovo} created successfully`);
    }catch(err){
      next(err);
    }
            
  };

  static atualizarLivro = async (req, res, next) =>{
    try{
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: `Livro de id: ${id} atualizado com sucesso`});
    }catch(err){
      next(err);
    }
  };

  static listarLivrosPorId = async (req, res, next) => {
    try{
      const id = req.params.id;
      const livroPesquisado = await livros.findById(id)
        .populate("autor", "nome")
        .exec();
      res.status(200).send(livroPesquisado);
    }catch(err){
      next(err);
    }
            
  };

  static excluirLivro = async (req, res, next) =>{
    try{
      const id = req.params.id;
            
      await livros.findByIdAndDelete(id);
      res.status(200).send({message: "document removed sucessfully"});
    }catch(err){
      next(err);
    }
           
  };

  static listarLivroPorEditora = async (req, res, next)=>{
    try{
      const editora = req.query.editora;
            
      const editoraDaAPI = await livros.find({"editora": editora});
      res.status(200).send(editoraDaAPI);
    }catch(err){
      next(err);
    }
            
  };
}

module.exports = LivrosControler;

