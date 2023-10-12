const PagNaoEncontarada = require("../erros/erroPagNaoEncontrada");
const RequisicaoIncorreta = require("../erros/requisiçãoIncorreta");
const { livros } = require("../models/index.js");
const processaBusca = require("../services/processaBusca");

class LivrosControler{
  static listarLivros = async(req, res, next) => {
    try{
      let { limite = 5, pagina = 1 } = req.query;

      limite = parseInt(limite);
      pagina = parseInt(pagina);

      if( limite > 0 && pagina > 0){
        const livrosDaAPI = await livros.find()
          .skip((pagina-1) * limite)
          .limit(limite)  
          .populate("autor")
          .exec();
                
        res.status(200).send(livrosDaAPI);
      }else {
        next(new RequisicaoIncorreta());
      }
      
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
      const livroPesquisado = await livros.findById(id)
        .populate("autor", "nome")
        .exec();
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
            
      const livroDaAPI = await livros.findByIdAndDelete(id);
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
        const buscaDaAPI = await livros
          .find(busca)
          .populate("autor");

        res.status(200).send(buscaDaAPI);
      } else {
        res.status(200).send([]);
      }

    }catch(err){
      next(err);
    }
            
  };
}



module.exports = LivrosControler;

