module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Varejista', [{
                nome: 'Gustavo Pereira',
                cpf: '45658254060',
                contato: '94992452360',
                email: 'gustavopereira@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                nome: 'Maria Aparecida',
                cpf: '42891196031',
                contato: '94981456600',
                email: 'mariaaparecida@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                nome: 'Jessica Costa',
                cpf: '70465723055',
                contato: '94981220011',
                email: 'jessicacosta@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                nome: 'Amanda Sousa',
                cpf: '01960561014',
                contato: '94984050102',
                email: 'amandas@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                nome: 'Rodrigo Viana',
                cpf: '23507233053',
                contato: '94991440200',
                email: 'rodrigov@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }]

        );

    },

    async down(queryInterface, Sequelize) {
        Example: await queryInterface.bulkDelete('Varejista', null, {});

    }
};