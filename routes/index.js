const { Router } = require('express')
const { getRoupas, getRoupa } = require('../constrolers/index')

const router = Router()

router.get('/', getRoupas)

router.get('/:id', getRoupa)

router.post('/', (req, res) => {
    try{
        res.send('Você fez uma requisição POST')
    }catch(err){
        res.send(err.message)
    }
})

module.exports = router;