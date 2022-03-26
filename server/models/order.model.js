const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({

    nameList: { 
        type: [String], 
        required:[true, "Name field must be completed"],
        minlength:[3, "Name must be at least 3 characters long"]
    },
    finalPrice:{
        type: Number,
        required:[true, "Name field must be completed"]
    },
    favorite: {
        type: Boolean
    }
    
}, { timestamps: true });
module.exports.Order = mongoose.model('Order', OrderSchema);