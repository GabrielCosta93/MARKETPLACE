const { Router } = require('express')

const produtoCT = require('../controllers/produtoCT')

const router = Router()

router.get('/produtos', produtoCT.pegaTodosProdutos)
router.get('/produtos/:id', produtoCT.pegaUmProduto)
router.post('/produtos', produtoCT.criaProduto)
router.put('/produtos/:id', produtoCT.atualizaProduto)
router.delete('/produtos/:id', produtoCT.apagaProduto)

module.exports = router