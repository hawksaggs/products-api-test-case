require('dotenv').config();
require('./utils/db');

const express = require('express');
const productRoutes = require('./routes/product.route');

const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.get('/', async (req, res) => {
    return res.status(200).send({});
});

app.use('/products', productRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Running on http://localhost:${port}`) });