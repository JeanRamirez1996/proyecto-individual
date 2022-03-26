const CartController = require('../controllers/cart.controller');
module.exports = function(app){
    app.get('/api/cart', CartController.findAllCart);
    app.get('/api/cart/:id', CartController.getCart);
    app.post('/api/new_cart', CartController.createCart);
    app.put('/api/edit_cart/:id', CartController.updateCart);
    app.delete('/api/delete_cart', CartController.deleteCart);
    app.delete('/api/delete_cart_item/:id', CartController.deleteAnExistingCartItem);
}