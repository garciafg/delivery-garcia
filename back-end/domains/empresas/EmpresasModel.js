const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Empresas = connection.define('tbl_empresas', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

//Empresas.sync({force: true});
module.exports = Empresas;