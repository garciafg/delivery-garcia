const express = require('express');
const router = express.Router();
const ProductsItemModel = require('./ProductsItensModel');

router.get('/productsItens/:id', (req, res) => {
    ProductsItemModel.findAll({
        where: {
            id_products: req.params.id
        }
    })
        .then(products => {
            res.json({products: products});
        })
        .catch(err => {
            res.status(500).json({error: err.message});
        });
});

module.exports = router;
