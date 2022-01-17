const express = require('express');
const Tamanho = require('../tamanhos/TamanhoModel');
const Bordas = require('../bordas/BordasModel');
const router = express.Router();
const PizzasModel = require('./PizzasModel');


router.get('/pizzas/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({err: 'id must be a number'});
    } else {
        if(req.params.id) {
            PizzasModel.findByPk(req.params.id, {
                include: [{
                    model: Tamanho,
                }]
            }).then(product => {
                res.json({product: product});
            }).catch(err => {
                res.json({err: "Ouve um erro"});
            });
        }else{
            res.json({err: "Ouve um erro"});
        }
    }
});

module.exports = router;