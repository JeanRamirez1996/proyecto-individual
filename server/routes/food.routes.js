const FoodController = require('../controllers/food.controller');
module.exports = function(app){
    app.get('/api/food', FoodController.findAllFood);
    app.get('/api/food/:id', FoodController.getFood);
    app.post('/api/new_food', FoodController.createFood);
    app.put('/api/edit_food/:id', FoodController.updateFood);
    app.delete('/api/delete_food/:id', FoodController.deleteAnExistingFood);
}