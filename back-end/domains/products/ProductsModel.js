const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Products = connection.define('tbl_products', {
   name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

//Products.sync({force: true});

module.exports = Products;