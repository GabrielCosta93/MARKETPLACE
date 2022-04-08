const { Router } = require('express')

const anuncioCT = require('../controllers/anuncioCT')

const router = Router()

router.get('/anuncios', anuncioCT.pegaTodosAnuncios)
router.get('/anuncios/:id', anuncioCT.pegaUmAnuncio)
router.post('/anuncios', anuncioCT.criaAnuncio)
router.put('/anuncios/:id', anuncioCT.atualizaAnuncio)
router.delete('/anuncios/:id', anuncioCT.apagaAnuncio)

module.exports = router