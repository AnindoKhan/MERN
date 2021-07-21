const {Author} = require('../models/Authors.model.js')
module.exports.index = (request, response) => {
    response.json({
        message: "is this working"
    });
}
module.exports.newAuthor = (request, response) => {
    const {name} = request.body;
    Author.create({
        name
    })
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err));
}
module.exports.allAuthors =(request, response) => {
    Author.find({})
    .then(authors => response.json(authors))
    .catch(err => response.json(err));
}
module.exports.findAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
    .then(author => response.json(author))
    .catch(err => response.json(err));
}
module.exports.editAuthor =(request, response) => {
    Author.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
    .then(updateAuthor => response.json(updateAuthor))
    .catch(err => response.status(400).json(err));
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id:request.params.id})
    .then(deleteAuthor => response(deleteAuthor))
    .catch(err => response.json(err));
}