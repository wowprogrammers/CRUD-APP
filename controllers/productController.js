const Product = require('../models/productModel');

// Create Product
const createProduct = async(req,res) => {
    try {
       
        const {productName,Description,price,inStock} = req.body;
       
        const product = await Product.create({
            productName,
            Description,
            price,
            inStock
        })

        if(product){
            return res.status(200).json({
                status:"Success",
                product:product
            })
        }
        
    } catch (error) {
        res.status(400).json({Error:error.message})
    }
}
// Get All Products
const getAllProducts = async(req,res) => {
try {
    const products = await Product.find();
// Products is in the form of Array
    if(products){
        return res.status(200).json({
            status:"Success",
            length:products.length,
            products:products
        })
    }
    
} catch (error) {
    res.status(400).json({Error:error.message});
}

}
// Get Product By Id
const getSpecificProduct = async(req,res) => {
    try {
        const productId = req.params.prodId;

        const product = await Product.findById(productId);

        if(product){
            return res.status(200).json({
                status:"Success",
                product:product
            })
        }else{
            return res.status(404).json({Error:"Product with this Id does not exist"});
        }

    } catch (error) {
        res.status(400).json({Error:error.message});
    }
}
// This is not proper search API
// Just to practice req.query object concept
const getProductByName = async(req,res) => {
    try {
        const prodName = req.query.productName;

        const product = await Product.find({productName:prodName});

        if(product){
            return res.status(200).json({
                status:"Success",
                length:product.length,
                product:product
            })
        }
    } catch (error) {
        res.status(400).json({Error:error.message});
    }
}
// Update Product By Id
const updateProduct = async(req,res) => {
    try {

        const prodId = req.params.prodId;
// Here Intentionally I am using req.body to Allow to update ANY field of the product Model.

        const checkProduct = await Product.findById(prodId);
        if(!checkProduct){
            return res.status(404).json({error:"Product with this Id does not exist"
            });
        }
        const product = await Product.findByIdAndUpdate(prodId,req.body,{
            runValidators:true,
            new:true
        })

        if(product){
            return res.status(200).json({
                status:"Success",
                product
            })
        }
    } catch (error) {
        res.status(400).json({Error:error.message})
    }
}
// Delete Product By id
const deleteProduct = async(req,res) => {
    try {
        const prodId = req.params.prodId;

        const deletedProd = await Product.findByIdAndDelete(prodId);

        if(!deletedProd){
            return res.status(404).json({Error:"Product with this id does not exist"})
        }else{
            return res.status(200).json({
                Status:"Successfully Deleted"
            })
        }
    } catch (error) {
        res.status(400).json({Error:error.message});
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getSpecificProduct,
    getProductByName,
    updateProduct,
    deleteProduct
}