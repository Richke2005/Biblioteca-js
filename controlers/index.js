const { getAllClothes, getClothesById, insereRoupa, modificarRoupa, deletarRoupaPorId } = require("../services")


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

        if(id && Number(id)){
            const roupa = getClothesById(id)
            res.send(roupa)
        } else {
            res.status(422)
            res.send("invalid id")
        }
        
    }catch(err){
        res.send(err.message)
    }
}

function postRoupa(req, res){
    try{
        const roupaNova = req.body

        if(req.body.type){
        insereRoupa(roupaNova)
        res.status(201)
        res.send("Roupa inserida com sucesso")    
        } else {
            res.status(422)
            res.send("the Type camp is required")
        }
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchRoupas(req, res){
    try{
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body

            modificarRoupa(body, id)
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

function deleteRoupa(req, res){
    try{
        const id = req.params.id

        if( id && Number(id) ){
            deletarRoupaPorId(id) 
            res.send("roupa deletada com sucesso")            
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
    getRoupas,
    getRoupa, 
    postRoupa, 
    patchRoupas, 
    deleteRoupa
}