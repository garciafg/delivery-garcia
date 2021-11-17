const express = require('express');
const Tamanho = require('../tamanhos/TamanhoModel');
const router = express.Router();
const ProductsModel = require('./ProductsModel');


router.get('/products/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({err: 'id must be a number'});
    } else {
        if(req.params.id) {
            ProductsModel.findByPk(req.params.id, {
                include: [{
                    model: Tamanho
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