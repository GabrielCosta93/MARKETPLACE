const { Router } = require('express')

const produtoCT = require('../controllers/produtoCT')

const router = Router()

router.get('/produto', produtoCT.pegaTodosProdutos)
router.get('/produto/:id', produtoCT.pegaUmProduto)
router.post('/produto', produtoCT.criaProduto)
router.put('/produto/:id', produtoCT.atualizaProduto)
router.delete('/produto/:id', produtoCT.apagaProduto)

module.exports = router