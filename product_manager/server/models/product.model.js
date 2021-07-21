const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: String},
    description:{type: String},
}, { timestamp:true});
module.exports.Product= mongoose.model('Product',ProductSchema);
