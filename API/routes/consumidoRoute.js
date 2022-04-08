const { Router } = require('express')

const consumidorCT = require('../controllers/consumidorCT')

const router = Router()

router.get('/consumidor', consumidorCT.pegaTodosConsumidores)
router.get('/consumidor/:id', consumidorCT.pegaUmConsumidor)
router.post('/consumidor', consumidorCT.criaConsumidor)
router.put('/consumidor/:id', consumidorCT.atualizaConsumidor)
router.delete('/consumidor/:id', consumidorCT.apagaConsumidor)

module.exports = router