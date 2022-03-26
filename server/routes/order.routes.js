const OrderController = require('../controllers/order.controller');
module.exports = function(app){
    app.get('/api/order', OrderController.findAllOrder);
    app.get('/api/order/:id', OrderController.getOrder);
    app.post('/api/new_order', OrderController.createOrder);
    app.put('/api/edit_order/:id', OrderController.updateOrder);
    app.delete('/api/delete_order/:id', OrderController.deleteAnExistingOrder);
}