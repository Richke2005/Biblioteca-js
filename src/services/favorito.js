const fs = require("fs")

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletaFavoritoPorID(id) {
    const roupas = JSON.parse(fs.readFileSync('favoritos.json'))
     
    const roupasFiltradas = roupas.filter( roupa => roupa.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(roupasFiltradas))
}

function insereFavorito(id) {
    const roupas = JSON.parse(fs.readFileSync('roupas.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const roupaInserida = roupas.find( roupa => roupa.id === id )
    const novaListaDeFavoritos = [...favoritos, roupaInserida ]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorID,
    insereFavorito, 
    
}