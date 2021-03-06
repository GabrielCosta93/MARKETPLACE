'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Anuncios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tempo_anuncio: {
                type: Sequelize.INTEGER
            },
            descricao: {
                type: Sequelize.TEXT
            },

            id_consumidor: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: { model: 'Consumidors', key: 'id' }
            },

            id_varejista: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: { model: 'Varejista', key: 'id' }
            },

            id_produto: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Produtos', key: 'id' }
            },


            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Anuncios');
    }
};