const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Products = require('../products/ProductsModel');


const Tamanho = connection.define('tbl_tamanhos', {
    name_width: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Products.hasMany(Tamanho, { foreignKey: 'id_product' }); // Um produto tem muitos tamanhos
Tamanho.belongsTo(Products, { foreignKey: 'id_product' }); // Um tamanho pertence a um produto
//Tamanho.sync({ force: true });

module.exports = Tamanho;