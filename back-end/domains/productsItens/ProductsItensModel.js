const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Products = require('../products/ProductsModel');

const ProductsItens = connection.define('tbl_products_itens', {
    name_item: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ingredientes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tamanho: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    id_products: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Products.hasMany(ProductsItens, { foreignKey: 'id_products' }); // Um products tem muitos products_itens
ProductsItens.belongsTo(Products, { foreignKey: 'id_products' }); // Um products_itens pertence a um products

//ProductsItens.sync({force: true});

module.exports = ProductsItens;