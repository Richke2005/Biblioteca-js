const { getAllClothes, getClothesById } = require("../services")


function getRoupas(req, res){
    try{
        const roupas = getAllClothes()
        res.send(roupas)
    }catch(err){
        res.send(err.message)
    }
}

function getRoupa(req, res){
    try{
        const id = req.params.id
        const roupa = getClothesById(id)
        res.send(roupa)
    }catch(err){
        res.send(err.message)
    }
}

module.exports = {
    getRoupas,
    getRoupa
}