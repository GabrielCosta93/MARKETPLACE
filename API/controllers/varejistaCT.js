const { json } = require('express/lib/response')
const database = require('../models')

class varejistaCT {
    static async pegaTodosVarejistas(req, res) {
        try {

            const todosVarejistas = await database.Varejista.findAll()
            return res.status(200).json(todosVarejistas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmVarejista(req, res) {
        const { id } = req.params
        try {
            const umVarejista = await database.Varejista.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umVarejista)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaVarejista(req, res) {
        const novoVarejista = req.body

        try {
            const novoVarejistaCriado = await database.Varejista.create(novoVarejista)
            return res.status(200).json(novoVarejistaCriado)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async atualizaVarejista(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Varejista.update(novasInfos, { where: { id: Number(id) } })
            const varejistaAtualizado = await database.Varejista.findOne({ where: { id: number(id) } })
            return res.status(200).json(varejistaAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async apagaVarejista(req, res) {
        const { id } = req.params
        try {
            await database.Varejista.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = varejistaCT