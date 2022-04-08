module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Produtos', [{
                    nome: 'Mascara Descartavel',
                    preco: '2.00',
                    quantidade: '1000',
                    descricao: 'Mascara com certificação N95',
                    createdAt: new Date(),
                    updatedAt: new Date()

                },
                {
                    nome: 'Sabao em Pó',
                    preco: '8.50',
                    quantidade: '80',
                    descricao: 'Marca OMO',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    nome: 'Capsula de Cafe',
                    preco: '20.00',
                    quantidade: '500',
                    descricao: 'Marca Marata, 16 Unid',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    nome: 'Papel de Parede',
                    preco: '22.50',
                    quantidade: '1500',
                    descricao: 'Preco por M2',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    nome: 'Touca de Cetim',
                    preco: '10.95',
                    quantidade: '500',
                    descricao: 'Marca Shein, Ideal para Coloracao de Cabelos',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    nome: 'Desodorante',
                    preco: '19.90',
                    quantidade: '1000',
                    descricao: 'Marca Dove',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    nome: 'Bala de Gelatina',
                    preco: '21.00',
                    quantidade: '200',
                    descricao: '500g por pacote',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    nome: 'Mascara para Limpeza Facial',
                    preco: '51.35',
                    quantidade: '500',
                    descricao: 'Carvao Ativado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    nome: 'Ring Light Mesa',
                    preco: '45.00',
                    quantidade: '80',
                    descricao: '6 polegadas, carregaor usb',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    nome: 'Fone de ouvido sem Fio',
                    preco: '89.90',
                    quantidade: '100',
                    descricao: 'Marca Xiaomi',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]

        );

    },

    async down(queryInterface, Sequelize) {
        Example: await queryInterface.bulkDelete('Produtos', null, {});

    }
};