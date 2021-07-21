const PirateController = require('../controllers/Pirate.controller');
module.exports = function(app){
    app.get('/api', PirateController.index);
    app.post('/api/pirate/new', PirateController.create);
    app.get('/api/allPirates', PirateController.all);
    app.get('/api/getPirate/:id', PirateController.findPirate);
    app.delete('/api/deletePirate/:id', PirateController.deletePirate);
}