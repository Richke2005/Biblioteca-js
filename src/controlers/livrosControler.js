const PagNaoEncontarada = require("../erros/erroPagNaoEncontrada");
const { livros } = require("../models/index.js");
const processaBusca = require("../services/processaBusca");

class LivrosControler{
  static listarLivros = async(req, res, next) => {
    try{
     const buscaLivros = livros.find();

     req.resultado = buscaLivros;

     next();
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
      const livroDaAPI = await livros.findByIdAndUpdate(id, {$set: req.body});
      if(livroDaAPI !== null){
        console.log(livroDaAPI);
        res.status(200).send({message: `Livro de id: ${id} atualizado com sucesso`});
      }else{
        next(new PagNaoEncontarada("Id do livro não localizado"));
      }
     
    }catch(err){
      next(err);
    }
  };

  static listarLivrosPorId = async (req, res, next) => {
    try{
      const id = req.params.id;
      const livroPesquisado = await livros
      .findById(id, {}, {autopopulate: false})
      .populate("autor")

      if(livroPesquisado !== null){
        res.status(200).send(livroPesquisado);
      }else{
        next(new PagNaoEncontarada("Id Do livro não encontrado"));
      }
      
    }catch(err){
      next(err);
    }
            
  };

  static excluirLivro = async (req, res, next) =>{
    try{
      const id = req.params.id;
            
      const livroDaAPI = livros.findByIdAndDelete(id);
      if(livroDaAPI !== null){
        res.status(200).send({message: "document removed sucessfully"});
      }else{
        next(new PagNaoEncontarada("Id do livro não localizado"));
      }
      
    }catch(err){
      next(err);
    }
           
  };

  static listarLivroPorFiltro = async (req, res, next)=>{
    try{
      const busca = await processaBusca(req.query);

      
      if(busca !== null){
        const buscaDaAPI = livros.find(busca);

          req.resultado = buscaDaAPI;

        next();
      } else {
        res.status(200).send([]);
      }

    }catch(err){
      next(err);
    }
            
  };
}



module.exports = LivrosControler;

