const { Router } = require('express')
const { getLivros, getLivro, postLivro, patchLivros, deleteLivro } = require('../controlers/index')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivros)

router.delete('/:id', deleteLivro)

module.exports = router;