const mongoose = require('mongoose');
const PurchaseSchema = new mongoose.Schema({
    order:{
        nameList: { 
            type: [String], 
            required:[true, "Name field must be completed"],
            minlength:[3, "Name must be at least 3 characters long"]
        },
        priceList: { 
            type: Array,
            required:[true, "Price field must be completed"],

        }
    },
    favorite: {
        type: Boolean
    }
    
}, { timestamps: true });
module.exports.Purchase = mongoose.model('Purchase', PurchaseSchema);