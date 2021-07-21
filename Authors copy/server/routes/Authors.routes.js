const AuthorsController = require('../controllers/Authors.controller');
module.exports= function(app){
    app.get('/api', AuthorsController.index);
    app.post('/api/new', AuthorsController.newAuthor);
    app.get('/api/all',AuthorsController.allAuthors);
    app.get('/api/getAuthor/:id', AuthorsController.findAuthor);
    app.put('/api/edit/:id', AuthorsController.editAuthor);
    app.delete('/api/delete/:id', AuthorsController.deleteAuthor);
    
}
