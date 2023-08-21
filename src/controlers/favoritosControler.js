const favoritos = require('../models/Favorito')

class FavoritosControler{
    static  listarFavorito = async (req, res) => {
        try{
            const favoritosDaAPI = await favoritos
            .find()
            .populate('favorito')
            .exec()
            
            res.status(200).send(favoritosDaAPI)
        }catch(err){
            res.status(500).send({message: err.message})
        }
    }

    static cadastrarFavoritoById = async (req, res) => {
        try {
            const id = req.params.id

            const insertfavorito = new favoritos({
            favorito : id
            })
            await insertfavorito.save()

            res.status(201).send({message: `favorito - ${insertfavorito}inserido com sucesso `})
        }catch(err){
            res.status(500).send({message: err.message})
        }
    }

    static excluirFavoritoById = async (req, res) =>{
        try{
            const id = req.params.id

            await favoritos.findByIdAndDelete(id)
            res.status(200).send({message: `favorito deletado com sucesso`})
        }catch(err){
            res.status(500).send({message: err.message})
        }
    }
}

module.exports = FavoritosControler