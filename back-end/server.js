const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const TamanhoModel = require('./domains/tamanhos/TamanhoModel');
const ProductsController = require('./domains/products/ProductsController');
const SaboresController = require('./domains/sabores/SaboresController');


app.use(bodyParser.json());
app.use(cors());

app.use('/', ProductsController);
app.use('/', SaboresController);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000, () => console.log('Server started on port 4000'));