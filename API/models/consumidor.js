'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Consumidor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Consumidor.hasMany(models.Anuncio, {
                foreignKey: 'id_consumidor'
            })
        }
    }
    Consumidor.init({
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        contato: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Consumidor',
    });
    return Consumidor;
};