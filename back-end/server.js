const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const TamanhoModel = require('./domains/tamanhos/TamanhoModel');
const BordasModel = require('./domains/bordas/BordasModel');
const BordasController = require('./domains/bordas/BordasController');
const PizzasController = require('./domains/pizzas/PizzasController');
const SaboresController = require('./domains/sabores/SaboresController');
const ProductsController = require('./domains/products/ProductsController');
const ProductsItensController = require('./domains/productsItens/ProductsItensController');
const EmpresasController = require('./domains/empresas/EmpresasController');



app.use(bodyParser.json());
app.use(cors());

app.use('/', PizzasController);
app.use('/', SaboresController);
app.use('/', BordasController);
app.use('/', ProductsController);
app.use('/', ProductsItensController);
app.use('/', EmpresasController);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000, () => console.log('Server started on port 4000'));