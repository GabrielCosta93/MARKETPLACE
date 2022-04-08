const express = require('express')
const consumidor = require('./consumidoRoute')
const varejista = require('./varejistaRoute')
const produto = require('./produtoRoute')
const anuncio = require('./anuncioRoute')

module.exports = app => {
    app.use(express.json())
    app.use(consumidor)
    app.use(varejista)
    app.use(produto)
    app.use(anuncio)
}