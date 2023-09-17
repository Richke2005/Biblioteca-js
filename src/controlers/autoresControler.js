const PagNaoEncontarada = require("../erros/erroPagNaoEncontrada");
const autores = require("../models/Autor");


class AutoresControler{
  static listarAutores = async (req, res, next) => {
    try{
      const autoresDaAPI = await autores.find();
      res.send(autoresDaAPI);
      res.status(200);
    }catch(err){
      next(err);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try{
      const autorNovo = new autores(req.body);
      await autorNovo.save();
      res.status(201).send(`document: ${autorNovo} created successfully`);
    }catch(err){
      next(err);
    }
        
  };

  static atualizarAutor = async (req, res, next) =>{
    try{
      const id = req.params.id;
      const autorPesquisado = await autores.findById(id);
      if(autorPesquisado !== null){
        await autores.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send({message: `Livro de id: ${id} atualizado com sucesso`});
      }else{
        next(new PagNaoEncontarada("Id do autor não encontrado, Portanto não é possivel realizar update"));
      }
    }catch(err){
      next(err);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try{
      const id = req.params.id;
      const autorPesquisado = await autores.findById(id);
      
      if(autorPesquisado !== null){
        res.status(200).send(autorPesquisado);
      }else{
        next(new PagNaoEncontarada("Id do autor não localizado"));
      }
      
    }catch(err){
      next(err);
      //middleware
    }
        
  };

  static excluirAutor = async (req, res, next) =>{
    try{
      const id = req.params.id;
      const autorPesquisado = await autores.findById(id);
      if(autorPesquisado !== null){
        await autores.findByIdAndDelete(id, {$set: req.body});
        res.status(200).send({message: `Livro de id: ${id} deletado com sucesso`});
      }else{
        next(new PagNaoEncontarada("Id do autor não localizado portanto, não é possível realizar delete"));
      }
    }catch(err){
      next(err);
    }
       
  };

}

module.exports = AutoresControler;
