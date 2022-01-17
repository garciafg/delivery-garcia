const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Pizzas = require('../pizzas/PizzasModel');


const Tamanho = connection.define('tbl_tamanhos', {
    name_width: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_pizza: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Pizzas.hasMany(Tamanho, { foreignKey: 'id_pizza' }); // Uma pizza tem muitos tamanhos
Tamanho.belongsTo(Pizzas, { foreignKey: 'id_pizza' }); // Um tamanho pertence a uma pizza
//Tamanho.sync({ force: true });

module.exports = Tamanho;