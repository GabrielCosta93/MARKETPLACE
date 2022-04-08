const { Router } = require('express')

const consumidorCT = require('../controllers/consumidorCT')

const router = Router()

router.get('/consumidors', consumidorCT.pegaTodosConsumidores)
router.get('/consumidors/:id', consumidorCT.pegaUmConsumidor)
router.post('/consumidors', consumidorCT.criaConsumidor)
router.put('/consumidors/:id', consumidorCT.atualizaConsumidor)
router.delete('/consumidors/:id', consumidorCT.apagaConsumidor)

module.exports = router