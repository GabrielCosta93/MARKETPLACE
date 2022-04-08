'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Produto extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Produto.hasMany(models.Anuncio, {
                foreignKey: 'id_produto'
            })
        }
    }
    Produto.init({
        nome: DataTypes.STRING,
        preco: DataTypes.FLOAT,
        quantidade: DataTypes.INTEGER,
        descricao: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Produto',
    });
    return Produto;
};