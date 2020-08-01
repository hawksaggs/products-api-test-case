const productService = require('../services/product.service');

module.exports = {
    getProducts: async (req, res) => {
        try {
            const products = await productService.getProducts();
            res.status(200).send({ data: products });
        } catch (e) {
            res.status(400).send({ message: e.message });
        }
    },
    createProduct: async (req, res) => {
        try {
            const { body } = req;
            const product = await productService.createProduct(body);
            res.status(201).send({ data: product });
        } catch (e) {
            res.status(400).send({ message: e.message });
        }
    }
}