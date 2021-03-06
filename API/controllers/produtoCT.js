const { json } = require('express/lib/response')
const database = require('../models')

class produtoCT {
    static async pegaTodosProdutos(req, res) {
        try {

            const todosProdutos = await database.Produto.findAll()
            return res.status(200).json(todosProdutos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmProduto(req, res) {
        const { id } = req.params
        try {
            const umProduto = await database.Produto.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umProduto)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaProduto(req, res) {
        const novoProduto = req.body

        try {
            const novoProdutoCriado = await database.Produto.create(novoProduto)
            return res.status(200).json(novoProdutoCriado)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async atualizaProduto(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Produto.update(novasInfos, { where: { id: Number(id) } })
            const produtoAtualizado = await database.Produto.findOne({ where: { id: number(id) } })
            return res.status(200).json(produtoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async apagaProduto(req, res) {
        const { id } = req.params
        try {
            await database.Produto.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = produtoCT