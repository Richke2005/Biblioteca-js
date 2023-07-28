const { Router } = require('express')
const { getRoupas, getRoupa, postRoupa, patchRoupas, deleteRoupa } = require('../controlers/index')

const router = Router()

router.get('/', getRoupas)

router.get('/:id', getRoupa)

router.post('/', postRoupa)

router.patch('/:id', patchRoupas)

router.delete('/:id', deleteRoupa)

module.exports = router;