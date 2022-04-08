 const { json } = require('express/lib/response')
 const database = require('../models')

 class consumidorCT {
     static async pegaTodosConsumidores(req, res) {
         try {

             const todosConsumidores = await database.Consumidor.findAll()
             return res.status(200).json(todosConsumidores)
         } catch (error) {
             return res.status(500).json(error.message)
         }
     }

     static async pegaUmConsumidor(req, res) {
         const { id } = req.params
         try {
             const umConsumidor = await database.Consumidor.findOne({
                 where: {
                     id: Number(id)
                 }
             })
             return res.status(200).json(umConsumidor)
         } catch (error) {
             return res.status(500).json(error.message)
         }
     }

     static async criaConsumidor(req, res) {
         const novoConsumidor = req.body

         try {
             const novoConsumidorCriado = await database.Consumidor.create(novoConsumidor)
             return res.status(200).json(novoConsumidorCriado)
         } catch (error) {
             return res.status(500).json(error.message)

         }
     }

     static async atualizaConsumidor(req, res) {
         const { id } = req.params
         const novasInfos = req.body
         try {
             await database.Consumidor.update(novasInfos, { where: { id: Number(id) } })
             const consumidorAtualizado = await database.Consumidor.findOne({ where: { id: number(id) } })
             return res.status(200).json(consumidorAtualizado)
         } catch (error) {
             return res.status(500).json(error.message)
         }

     }

     static async apagaConsumidor(req, res) {
         const { id } = req.params
         try {
             await database.Consumidor.destroy({ where: { id: Number(id) } })
             return res.status(200).json({ mensagem: `id ${id} deletado` })
         } catch (error) {
             return res.status(500).json(error.message)
         }
     }
 }

 module.exports = consumidorCT