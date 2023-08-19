const autores = require("../models/Autor")

class AutoresControler{
    static listarAutores = async (req, res) => {
        try{
            const autoresDaAPI = await autores.find()
            res.send(autoresDaAPI)
            res.status(200)
        }catch(err){
            res.send(err.message)
        }
    }

    static cadastrarAutor = async (req, res) => {
        try{
            const autorNovo = new autores(req.body)
            await autorNovo.save()
            res.status(201).send(`document: ${autorNovo} created successfully`)
        }catch(err){
            res.status(500).send({message: `${err.message} - failed to create document`})
        }
        
    }

    static atualizarAutor = async (req, res) =>{
        try{
            const id = req.params.id
            await autores.findByIdAndUpdate(id, {$set: req.body})
            
            res.status(200).send({message: `Livro de id: ${id} atualizado com sucesso`})
        }catch(err){
            res.status(500).send({message:`${err.message} - id do livro não encontardo`})
        }
    }

    static listarAutorPorId = async (req, res) => {
        try{
            const id = req.params.id
            const autorPesquisado = await autores.findById(id)
            res.status(200).send(autorPesquisado)
        }catch(err){
            res.status(400).send({message: err.message})
        }
        
    }

    static excluirAutor = async (req, res) =>{
        try{
            const id = req.params.id
        
            await autores.findByIdAndDelete(id)
            res.status(200).send({message: 'document removed sucessfully'})
        }catch(err){
            res.status(500).send({message: err.message})
        }
       
    }

}

module.exports = AutoresControler
