const express = require('express');
const router = express.Router();
const SaboresModel = require('./SaboresModel');

router.get('/sabores/:tamanho_id', (req, res) => {

    let tamanho_id = req.params.tamanho_id;

    SaboresModel.findAll({
        where: {
            tamanho_id: tamanho_id
        }
    })
        .then(sabores => {
            res.status(200).json({sabores: sabores});
        })
        .catch(error => {
            res.status(500).json({error: "Ouve um erro!" +error});
        });

});

module.exports = router;

