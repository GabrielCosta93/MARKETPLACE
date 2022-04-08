module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Anuncios', [{
                id_consumidor: 1,
                id_varejista: null,
                id_produto: 1,
                tempo_anuncio: 5,
                descricao: 'PRECISO URGENTE!!',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                id_consumidor: null,
                id_varejista: 1,
                id_produto: 1,
                tempo_anuncio: 10,
                descricao: 'BLACK FRIDAY, APROVEITEM',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                id_consumidor: null,
                id_varejista: 2,
                id_produto: 2,
                tempo_anuncio: 3,
                descricao: 'QUEIMA DE ESTOQUE, RESTAM POUCAS UNIDADES',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                id_consumidor: null,
                id_varejista: 3,
                id_produto: 8,
                tempo_anuncio: 7,
                descricao: 'O MELHOR PRECO NA SEMANA DO CONSUMIDOR',
                createdAt: new Date(),
                updatedAt: new Date()
            }, ]

        );

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Anuncios', null, {});

    }
};