const express = require('express');
const router = express.Router();
const EmpresaModel = require('./EmpresasModel');
const ProductsModel = require('../products/ProductsModel');
const PizzasModel = require('../pizzas/PizzasModel');

// Rota listar empresa e produtos que pertençam a ela
router.get('/delivery/:slug', async (req, res) => {

    const slug = req.params.slug;
    EmpresaModel.findOne({
        where: {
            slug: slug
        },
        include: [{model: ProductsModel}]
    }).then((empresa) =>{
        if (empresa) {
            res.status(200).json(empresa);
        } else {
            res.status(404).json({ message: 'Empresa não encontrada' });
        }
    }).catch((err) => {
        res.status(500).json({ message: 'Erro ao listar empresa' });
    });
});

module.exports = router;