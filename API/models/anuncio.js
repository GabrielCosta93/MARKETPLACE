'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Anuncio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Anuncio.belongsTo(models.Consumidor, {
                foreignKey: 'id_consumidor'
            })
            Anuncio.belongsTo(models.Varejista, {
                foreignKey: 'id_varejista'
            })
            Anuncio.belongsTo(models.Produto, {
                foreignKey: 'id_produto'
            })
        }
    }
    Anuncio.init({
        tempo_anuncio: DataTypes.INTEGER,
        descricao: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Anuncio',
    });
    return Anuncio;
};