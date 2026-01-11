'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const passwordHash = await bcrypt.hash('123456', 8);

    await queryInterface.bulkInsert(
      'usuarios',
      [
        {
          admin: true,
          nome: 'Admin',
          email: 'admin@autovitrine.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'usuarios',
      {
        email: 'admin@autovitrine.com',
      },
      {},
    );
  },
};
