const fs = require('fs')
const livros = require('../models/livro')

async function getAllBooks(){
    return await livros.find()
}

function getLivrosById(id){
    const livros = JSON.parse(fs.readFileSync('roupas.json'))
    const filterBooks = livros.filter( livro => livro.id === id)[0]
    return filterBooks
}

async function insereLivro(livroNovo) {
    const novoLivro = new livros(livroNovo)
    await novoLivro.save()
}

function modificarLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync('roupas.json'))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id) 

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes }
    //roupasAtuais[indiceModificado] -> { id: "2", type: "masculino" }
    //modificacoes -> { type: "feminino" }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("roupas.json", JSON.stringify(livrosAtuais))
}

function deletarLivroPorId(id){
    const livros =  JSON.parse(fs.readFileSync('roupas.json'))
    const filterBooks = livros.filter( livro => livro.id !== id)

    fs.writeFileSync('roupas.json', JSON.stringify(filterBooks))
}
module.exports = {
    getAllBooks,
    getLivrosById, 
    insereLivro, 
    modificarLivro, 
    deletarLivroPorId
}