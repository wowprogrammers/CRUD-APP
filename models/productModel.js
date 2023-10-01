const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
productName:{
    type:String,
    required:true,
    default:"productName",
    trim:true
},
Description:{
    type:String,
    trim:true
},
price:{
    type:Number,
    required:true
},
inStock:{
    type:Boolean,
    default:false
},
Date:{
    type:Date,
    default:new Date() 
}
})

const Product = mongoose.model("Product",productSchema); 
module.exports = Product