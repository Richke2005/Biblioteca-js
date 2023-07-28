const fs = require('fs')

function getAllClothes(){
    return JSON.parse(fs.readFileSync('roupas.json'))
}

function getClothesById(id){
    const roupas = JSON.parse(fs.readFileSync('roupas.json'))
    const filterClothes = roupas.filter( roupa => roupa.id === id)[0]
    return filterClothes
}

function insereRoupa(roupaNova) {
    const roupas = JSON.parse(fs.readFileSync('roupas.json'))

    const novaListaDeRoupas = [...roupas, roupaNova]

    fs.writeFileSync('roupas.json', JSON.stringify(novaListaDeRoupas))
}

function modificarRoupa(modificacoes, id){
    let roupasAtuais = JSON.parse(fs.readFileSync('roupas.json'))
    const indiceModificado = roupasAtuais.findIndex(roupa => roupa.id === id) 

    const conteudoMudado = {...roupasAtuais[indiceModificado], ...modificacoes }
    //roupasAtuais[indiceModificado] -> { id: "2", type: "masculino" }
    //modificacoes -> { type: "feominnino" }

    roupasAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("roupas.json", JSON.stringify(roupasAtuais))
}

function deletarRoupaPorId(id){
    const roupas =  JSON.parse(fs.readFileSync('roupas.json'))
    const filterClothes = roupas.filter( roupa => roupa.id !== id)

    fs.writeFileSync('roupas.json', JSON.stringify(filterClothes))
}
module.exports = {
    getAllClothes,
    getClothesById, 
    insereRoupa, 
    modificarRoupa, 
    deletarRoupaPorId
}