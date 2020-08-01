const ProductModel = require('../models/product.model');

module.exports = {
    getProducts: async () => {
        return ProductModel.find();
    },
    createProduct: async (data) => {
        const product = new ProductModel(data);
        return product.save();
    }
}