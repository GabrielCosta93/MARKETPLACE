module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Consumidor', [{
                nome: 'Joao Dores',
                cpf: '26379882073',
                contato: '94988024512',
                email: 'joaodores@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                nome: 'Guilherme Silva',
                cpf: '36284219008',
                contato: '94992456325',
                email: 'guilhermesilva@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nome: 'Diego Costa',
                cpf: '36577338094',
                contato: '94981154232',
                email: 'diego123@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nome: 'Eduardo Lopes',
                cpf: '44125691010',
                contato: '94991145230',
                email: 'eduardolop@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nome: 'Renato Alves',
                cpf: '60351847073',
                contato: '94981224545',
                email: 'renatodj@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }]

        );

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Consumidor', null, {});

    }
};