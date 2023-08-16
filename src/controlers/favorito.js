const { getTodosFavoritos, insereFavorito, deletaFavoritoPorID } = require("../services/favorito")


function getFavoritos(req, res){
    try{
        const roupas = getTodosFavoritos()
        res.send(roupas)
        res.status(200)
    }catch(err){
        res.send(err.message)
    }
}

function postFavorito(req, res){
    try{
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("Roupa inserida com sucesso")    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavoritos(req, res){
    try{
        const id = req.params.id

        if( id && Number(id) ){
            deletaFavoritoPorID(id) 
            res.send("Favorito deletado com sucesso")            
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
    getFavoritos, 
    postFavorito, 
    deleteFavoritos
}