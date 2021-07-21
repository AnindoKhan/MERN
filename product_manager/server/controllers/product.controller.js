const {Product} = require('../models/product.model')
module.exports.index = (request, response) => {
    response.json({
        message:"Whats up"
    });
}

module.exports.createProduct = (request, response) => {
    const {title, price, description} = request.body;
    Product.create({
        title, 
        price, 
        description
    })
    .then(product => response.json(product))
    .catch(err =>response.json(err));
}
module.exports.findAllProducts = (request, response) => {
    Product.find({})
    .then(products => response.json(products))
    .catch(err => response.json(err)); 
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err)); 
}
module.exports.updateProduct =(request, response) =>{
    Product.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updateProduct => response.json(updateProduct))
    .catch(err => response.json(err));
}
module.exports.delete =(request, response) => {
    Product.deleteOne({_id:request.params.id})
    .then(deleteProduct => response.json(deleteProduct))
    .catch(err => response.json(err));
}