const { getAllBooks, getLivrosById, insereLivro, modificarLivro, deletarLivroPorId } = require("../services")


function getLivros(req, res){
    try{
        const livros = getAllBooks()
        res.send(livros)
    }catch(err){
        res.send(err.message)
    }
}

function getLivro(req, res){
    try{
        const id = req.params.id

        if(id && Number(id)){
            const livro = getLivrosById(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("invalid id")
        }
        
    }catch(err){
        res.send(err.message)
    }
}

function postLivro(req, res){
    try{
        const livroNovo = req.body

        if(req.body.nome){
        insereLivro(livroNovo)
        res.status(201)
        res.send("livro inserido com sucesso")    
        } else {
            res.status(422)
            res.send("the name camp is required")
        }
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivros(req, res){
    try{
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body

            modificarLivro(body, id)
            res.send("item modificado com sucesso")
        } else {
            res.status(422)
            res.send("invalid id")            
        }
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try{
        const id = req.params.id

        if( id && Number(id) ){
            deletarLivroPorId(id) 
            res.send("livro deletado com sucesso")            
        } else {
            res.status(422)
            res.send("invalid id")            
        }
       
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro, 
    postLivro, 
    patchLivros, 
    deleteLivro
}