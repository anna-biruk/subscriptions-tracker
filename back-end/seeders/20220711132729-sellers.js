'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Sellers', [{
            title: 'Netflix',
            iconUrl: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                title: 'HBO',
                iconUrl: "https://cdn-icons-png.flaticon.com/512/5977/5977584.png",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Amazon Prime',
                iconUrl: "https://brandlogos.net/wp-content/uploads/2022/01/amazon_prime_video-logo-brandlogo.net_.png",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Youtube',
                iconUrl: "https://brandlogos.net/wp-content/uploads/2020/03/YouTube-icon-SVG.png",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                title: 'Apple TV',
                iconUrl: "https://cdn-icons-png.flaticon.com/512/831/831330.png",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Spotify',
                iconUrl: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Apple Music',
                iconUrl: "https://cdn-icons-png.flaticon.com/512/0/747.png",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Sellers', null, {});
    }
};
