const express = require('express');
const BordasModel = require('../bordas/BordasModel');
const router = express.Router();

router.get('/bordas/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({err: 'id must be a number'});
    } else {
        if(req.params.id) {
            BordasModel.findAll({
                where: {
                    id_pizza: req.params.id
                }
            }).then(bordas => {
                res.status(200).json({bordas: bordas});
            }).catch(err => {
                res.status(500).json({err: err});
            });
        }else{
            res.json({err: "Ouve um erro"});
        }
    }
});

module.exports = router;