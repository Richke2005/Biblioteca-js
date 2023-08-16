const { getAllBooks, getLivrosById, insereLivro, modificarLivro, deletarLivroPorId } = require("../services/index")
const { response } = require("express")

async function getLivros(req, res){
    try{
    const livros = await getAllBooks()
    res.send(livros)
    response.status(200)
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

async function postLivro(req, res){
    try{
        let livroNovo = req.body
        await insereLivro(livroNovo)
        res.status(201)
        res.send(`livro cadastrado com sucesso`)  
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