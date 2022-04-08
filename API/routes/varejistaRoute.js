const { Router } = require('express')

const varejistaCT = require('../controllers/varejistaCT')

const router = Router()

router.get('/varejista', varejistaCT.pegaTodosVarejistas)
router.get('/varejista/:id', varejistaCT.pegaUmVarejista)
router.post('/varejista', varejistaCT.criaVarejista)
router.put('/varejista/:id', varejistaCT.atualizaVarejista)
router.delete('/varejista/:id', varejistaCT.apagaVarejista)

module.exports = router