const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Empresas = require('../empresas/EmpresasModel');

const Products = connection.define('tbl_products', {
    name_product: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_empresa: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

//Products.sync({force: true});
// Empresa tem muitos produtos
Products.belongsTo(Empresas, {foreignKey: 'id_empresa'});
// Muitos produtos para uma empresa
Empresas.hasMany(Products, {foreignKey: 'id_empresa'});
module.exports = Products;