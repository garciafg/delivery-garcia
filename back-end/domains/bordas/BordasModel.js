const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Pizzas = require('../pizzas/PizzasModel');

const Bordas = connection.define('tbl_bordas', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    id_pizza: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Pizzas.hasMany(Bordas, { foreignKey: 'id_pizza' }); // Um produto tem muitas bordas
Bordas.belongsTo(Pizzas, { foreignKey: 'id_pizza' }); // Uma borda pertence a uma pizza
//Bordas.sync({ force: true });

module.exports = Bordas;