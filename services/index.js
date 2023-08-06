const fs = require('fs')

function getAllBooks(){
    return JSON.parse(fs.readFileSync('roupas.json'))
}

function getLivrosById(id){
    const livros = JSON.parse(fs.readFileSync('roupas.json'))
    const filterBooks = livros.filter( livro => livro.id === id)[0]
    return filterBooks
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('roupas.json'))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync('roupas.json', JSON.stringify(novaListaDeLivros))
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