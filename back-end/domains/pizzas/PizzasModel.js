const Sequelize = require('sequelize');
const connection = require('../../database/database');
const EmpresaModel = require('../empresas/EmpresasModel');

const Pizzas = connection.define('tbl_pizzas', {
   name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_empresa: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

//Pizzas.sync({force: true});

// Empressa tem muitas pizzas
Pizzas.belongsTo(EmpresaModel, {foreignKey: 'id_empresa'});

// Muitas pizzas para uma empresa
Pizzas.belongsTo(EmpresaModel, {foreignKey: 'id_empresa'});

module.exports = Pizzas;