const PurchaseController = require('../controllers/purchase.controller');
module.exports = function(app){
    app.get('/api/purchase', PurchaseController.findAllPurchase);
    app.get('/api/purchase/:id', PurchaseController.getPurchase);
    app.post('/api/new_purchase', PurchaseController.createPurchase);
    app.put('/api/edit_purchase/:id', PurchaseController.updatePurchase);
    app.delete('/api/delete_purchase/:id', PurchaseController.deleteAnExistingPurchase);
}