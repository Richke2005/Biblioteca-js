const fs = require('fs')

function getAllClothes(){
    return JSON.parse(fs.readFileSync('roupas.json'))
}

function getClothesById(id){
    const roupas = JSON.parse(fs.readFileSync('roupas.json'))
    const filterClothes = roupas.filter( roupa => roupa.id === id)[0]
    return filterClothes
}

module.exports = {
    getAllClothes,
    getClothesById
}