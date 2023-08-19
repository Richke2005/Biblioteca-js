const livros = require('../models/Livro')

class LivrosControler{
        static listarLivros = async(req, res) => {
            try{
                const livrosDaAPI = await livros.find()
                .populate('autor')
                .exec()
                
                res.status(200).send(livrosDaAPI)
            }catch(err){
                res.send(err.message)
            }
        }

        static cadastrarLivro = async (req, res) => {
            try{
                const livroNovo = new livros(req.body)
                await livroNovo.save()
                res.status(201).send(`document: ${livroNovo} created successfully`)
            }catch(err){
                res.status(500).send({message: `${err.message} - failed to create document`})
            }
            
        }

        static atualizarLivro = async (req, res) =>{
            try{
                const id = req.params.id
                await livros.findByIdAndUpdate(id, {$set: req.body})
                res.status(200).send({message: `Livro de id: ${id} atualizado com sucesso`})
            }catch(err){
                res.status(500).send({message:`${err.message} - id do livro não encontardo`})
            }
        }

        static listarLivrosPorId = async (req, res) => {
            try{
                const id = req.params.id
                const livroPesquisado = await livros.findById(id)
                .populate('autor', 'nome')
                .exec()
                res.status(200).send(livroPesquisado)
            }catch(err){
                res.status(400).send({message: err.message})
            }
            
        }

        static excluirLivro = async (req, res) =>{
            try{
                const id = req.params.id
            
                await livros.findByIdAndDelete(id)
                res.status(200).send({message: 'document removed sucessfully'})
            }catch(err){
                res.status(500).send({message: err.message})
            }
           
        }

        static listarLivroPorEditora = async (req, res)=>{
           try{
            const editora = req.query.editora
            
            const editoraDaAPI = await livros.find({"editora": editora})
            res.status(200).send(editoraDaAPI)
           }catch(err){
            res.status(500).send({message: err.message})
           }
            
        }
}

module.exports = LivrosControler

