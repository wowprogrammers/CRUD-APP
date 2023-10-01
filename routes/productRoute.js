// Importing Packages
const express = require('express');
const productRoute = express.Router();
const productController = require('../controllers/productController');




// All Routes
productRoute.post('/',productController.createProduct);
productRoute.get('/',productController.getAllProducts);
productRoute.get('/:prodId',productController.getSpecificProduct);
productRoute.get('/get-product/By-name',productController.getProductByName);
productRoute.put('/:prodId',productController.updateProduct);
productRoute.delete('/:prodId',productController.deleteProduct);



// Module Export Statement
module.exports = productRoute;