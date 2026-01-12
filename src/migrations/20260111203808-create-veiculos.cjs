'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fabricante: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano_modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cambio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      combustivel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quilometragem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      observacoes: {
        type: Sequelize.TEXT,
      },
      imagens: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      tipo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipos_veiculo',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      visivel: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('veiculos');
  },
};
