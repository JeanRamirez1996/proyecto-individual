const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api/person', PersonController.findAllPerson);
    app.get('/api/person/:id', PersonController.getPerson);
    app.post('/api/new_person', PersonController.createPerson);
    app.put('/api/edit_person/:id', PersonController.updatePerson);
    app.delete('/api/delete_person/:id', PersonController.deleteAnExistingPerson);
}