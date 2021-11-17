const Sequelize = require('sequelize');
const connect = require('../../database/database');
const TamanhoModel = require('../tamanhos/TamanhoModel');

const Sabores = connect.define('tbl_sabores', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tamanho_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
});

    //Sabores.sync({force: true});
    TamanhoModel.hasMany(Sabores, {foreignKey: 'tamanho_id'}); // Um tamanho tem muitos sabores
    module.exports = Sabores;