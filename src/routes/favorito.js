const { Router } = require('express')
const { getFavoritos, postFavorito, deleteFavoritos } = require( '../controlers/favorito.js')

const router = Router()

router.get( '/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deleteFavoritos)

module.exports = router