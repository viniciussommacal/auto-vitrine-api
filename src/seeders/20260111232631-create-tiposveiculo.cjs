'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tipos_veiculo',
      [
        {
          nome: '0km',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Seminovo',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipos_veiculo', null, {});
  },
};
