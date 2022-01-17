const express = require('express');
const router = express.Router();
const ProductModel = require('../products/ProductsModel');
const ProductItensModel = require('../productsItens/ProductsItensModel');


router.get('/products/:idEmpresa', async (req, res) => {
    try {
        const products = await ProductModel.findAll({
            where: {
                id_empresa: req.params.idEmpresa
            },
            include: [{
                model: ProductItensModel
            }]
        });
        res.json({products: products});
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// Trazer categoria de produtos e seus itens
router.get('/products-filter/:idProduct', async (req, res) => {
    try {
        const products = await ProductModel.findAll({
            where: {
                id: req.params.idProduct
            },
            include: [{
                model: ProductItensModel
            }]
        });
        res.json({products: products});
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// Pegar detalhe de um item pelo id
router.get('/product-item/:idItem', async (req, res) => {
    try {
        const productItem = await ProductItensModel.findAll({
            where: {
                id: req.params.idItem
            }
        });
        res.json({productItem: productItem});
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});


module.exports = router;

